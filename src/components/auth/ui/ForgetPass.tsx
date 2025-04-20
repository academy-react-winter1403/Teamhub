import { Field, Form, Formik } from "formik";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={() => {}}
        validationSchema={""}
      >
        <div className="w-full h-93">
          <h2 className="font-extrabold text-4xl m-0">{AuthData[16].title}</h2>
          <Form className="w-full h-full flex flex-col justify-evenly items-center">
            <span className="text-start font-light text-sm">
              {AuthData[17].title}
            </span>
            <div className="w-full flex" dir="ltr">
              {/*  */}
            </div>
            <Field
              className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
              name="email"
              placeholder="ایمیل"
            />
            {/* <div className="flex justify-around mt-3"></div> */}

            <button
              type="submit"
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-3"
            >
              {AuthData[0].title}
            </button>
            <div className="mt-2">
              {AuthData[7].title}
              <Link to="" className="text-blue-500 ">
                {AuthData[10].title}
              </Link>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default ForgetPass;
