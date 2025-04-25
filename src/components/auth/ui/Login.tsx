import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { ToastContainer } from "react-toastify";
import { loginSchema } from "../../../core/validations/LoginValidation";
import { LoginFormValues } from "../../../core/services/types/Auth";
import { sendLoginData } from "../func/loginService";
import { useState } from "react";

const LoginPageForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    setErrorMessage("");
    try {
      await sendLoginData(
        values.phoneOrGmail,
        values.password,
        values.rememberMe
      );
    } catch (error: any) {
      setErrorMessage("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
      <Formik
        initialValues={{
          phoneOrGmail: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        <Form className="w-full h-full flex flex-col justify-evenly items-center">
          <Field
            className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
            name="phoneOrGmail"
            placeholder="ایمیل یا شماره موبایل"
          />
          <ErrorMessage
            name="phoneOrGmail"
            component="div"
            className="text-red-500 text-sm mt-1"
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
            className="text-red-500 text-sm mt-1"
          />
          <div className="flex justify-around mt-3">
            <div>
              <Field name="rememberMe" type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="m-3">
                {AuthData[1].title}
              </label>
            </div>
            <div className="divider divider-horizontal"></div>
            <Link to="/auth/forgetpassword" className="text-blue-500">
              {AuthData[2].title}
            </Link>
          </div>

          <button
            type="submit"
            className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
            disabled={loading}
          >
            {/* {AuthData[12].title} */}
            {loading ? AuthData[12].title : AuthData[13].title}
          </button>

          <div className="mt-2">
            {AuthData[4].title}
            <Link to="/auth/signup" className="text-blue-500 ">
              {AuthData[9].title}
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPageForm;
