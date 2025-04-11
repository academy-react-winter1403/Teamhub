import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { AuthData } from "../../../core/constants/mock/AuthData";

const LoginForm = () => {
  return (
    <Fragment>
      {/* <h3 className="font-bold text-2xl w-50">ورود به حساب</h3> */}

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {}}
        validationSchema={""}
      >
        <div className="w-full h-93">
          <Form className="w-full h-full flex flex-col justify-evenly items-center">
            <Field
              className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
              name="email"
              placeholder="ایمیل یا شماره موبایل"
            />

            <Field
              className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
              name="password"
              placeholder="رمز عبور"
            />
            <div className="flex justify-around mt-3">
              <div>
                <input name="remember" type="checkbox" />
                <label htmlFor="remember" className="m-3">
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
            >
              {AuthData[12].title}
            </button>
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
