import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
const SignupPageForm = () => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly  border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{ Number: "" }}
        onSubmit={() => {}}
        validationSchema={""}
      >
        <div className="w-full h-93">
          <h2 className="font-extrabold text-4xl m-0">{AuthData[3].title}</h2>

          <Form className="w-full h-full flex flex-col justify-evenly items-center">
            <Field
              name="mobile"
              type="tel"
              className="input validator tabular-nums"
              required
              placeholder="شماره موبایل"
              pattern="[0-9]"
              minLength="10"
              maxLength="10"
              title="Must be 10 digits"
            />

            <button
              type="submit"
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
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
        </div>
      </Formik>
    </div>
  );
};

export default SignupPageForm;
