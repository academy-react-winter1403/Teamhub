import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { SignupCodeSchema } from "../../../core/validations/SignupValidate";
import { useEffect, useState } from "react";
import { sendSignupCode } from "../../../core/services/api/Signup";
import { toast } from "react-toastify";
const SignupPageForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { phone: string }) => {
    console.log("Form Submitted!", values);
    setLoading(true);
    setErrorMessage("");

    const result = await sendSignupCode({
      phone: values.phone,
    });

    setLoading(false);

    if (result === false) {
      toast.error("خطایی رخ داد، لطفاً دوباره تلاش کنید.");
    } else {
      toast.success("کد تایید ارسال شد.");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly  border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{ phone: "" }}
        onSubmit={handleSubmit}
        validationSchema={SignupCodeSchema}
      >
        {({ errors, touched }) => (
          <Form className="w-full h-93 flex flex-col justify-evenly items-center">
            <h2 className="font-extrabold text-4xl m-0">{AuthData[3].title}</h2>

            <Field
              name="phone"
              type="tel"
              className={`input validator tabular-nums w-2/3 p-3 rounded-md 
          ${
            errors.phone && touched.phone
              ? "border border-red-500 bg-red-50"
              : "border border-gray-300"
          }
        `}
              required
              placeholder="شماره موبایل"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />

            <button
              type="submit"
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
              disabled={loading}
            >
              {AuthData[12].title}
            </button>

            <div className="mt-2">
              {AuthData[4].title}
              <Link to="/login" className="text-blue-500 ">
                {AuthData[9].title}
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPageForm;
