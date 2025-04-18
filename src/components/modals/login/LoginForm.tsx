import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { loginSchema } from "../../../core/validations/LoginValidation";
import { LoginAPI } from "../../../core/services/api/Auth";
import { useEffect, useState } from "react";
import { ToastError } from "../../common/Toast";

const LoginForm = () => {
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

  //
  return (
    <Fragment>
      <Formik
        initialValues={{ phoneOrGmail: "", password: "", rememberMe: false }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div className="w-full h-93">
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
              <Link to="" className="text-blue-500">
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
              <Link to="" className="text-blue-500 ">
                {AuthData[9].title}
              </Link>
            </div>
          </Form>
        </div>
      </Formik>
    </Fragment>
  );
};

export { LoginForm };
