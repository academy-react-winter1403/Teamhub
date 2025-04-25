import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { ToastContainer } from "react-toastify";
import { SignupCodeSchema } from "../../../core/validations/SignupValidate";
import { SignupFormValues } from "../../../core/services/types/Auth";
import { sendVerificationCode } from "../func/authServices";

const SignupStepOne = () => {
  const onSubmit = async (values: SignupFormValues) => {
    try {
      await sendVerificationCode(values.phoneNumber, true);
    } catch (error) {
      // not need to use but i use
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ phoneNumber: "" }}
        onSubmit={onSubmit}
        validationSchema={SignupCodeSchema}
      >
        {({ errors, touched }) => (
          <Form className="w-full h-93 flex flex-col justify-evenly items-center">
            <Field
              name="phoneNumber"
              type="tel"
              className={`input validator tabular-nums w-2/3 p-3 rounded-md 
            ${
              errors.phoneNumber && touched.phoneNumber
                ? "border border-red-500 bg-red-50"
                : "border border-gray-300"
            }
          `}
              required
              placeholder="شماره موبایل"
            />
            <button
              type="submit"
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
            >
              {AuthData[12].title}
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-2">
        {AuthData[4].title}
        <Link to="/auth/login" className="text-blue-500">
          {AuthData[9].title}
        </Link>
      </div>
    </>
  );
};

export default SignupStepOne;
