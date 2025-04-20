import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { LoginAPI } from "../../../core/services/api/Auth";
import { useEffect, useState } from "react";
import { ToastError } from "../../common/Toast";
import { loginSchema } from "../../../core/validations/LoginValidation";

const LoginPageForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: {
    phoneOrGmail: string;
    password: string;
    rememberMe: boolean;
  }) => {
    setLoading(true);
    setErrorMessage("");

    const result = await LoginAPI({
      phoneOrGmail: values.phoneOrGmail,
      password: values.password,
      rememberMe: values.rememberMe,
    });

    setLoading(false);

    if (result === false) {
      setErrorMessage("خطایی در ورود رخ داده است. لطفاً دوباره تلاش کنید.");
    } else {
      console.log("ورود موفق:", result);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{
          phoneOrGmail: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div className="w-full h-93">
          <h2 className="font-extrabold text-4xl m-0">{AuthData[0].title}</h2>
          <Form className="w-full h-full flex flex-col justify-evenly items-center">
            <Field
              className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
              name="phoneOrGmail"
              placeholder="ایمیل یا شماره موبایل"
            />

            <Field
              className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
              name="password"
              type="password"
              placeholder="رمز عبور"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
            <div className="flex justify-around mt-3">
              <div>
                <input name="rememberMe" type="checkbox" />
                <label htmlFor="rememberMe" className="m-3">
                  {AuthData[1].title}
                </label>
              </div>
              <div className="divider divider-horizontal"></div>
              <Link to="/forgetpassword" className="text-blue-500">
                {AuthData[2].title}
              </Link>
            </div>

            <button
              type="submit"
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
              disabled={loading}
            >
              {loading ? AuthData[12].title : AuthData[13].title}
            </button>

            {errorMessage && <ToastError message={errorMessage} />}

            <div className="mt-2">
              {AuthData[4].title}
              <Link to="/signup" className="text-blue-500 ">
                {AuthData[9].title}
              </Link>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default LoginPageForm;
