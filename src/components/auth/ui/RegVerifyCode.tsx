import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import OTPInputCode from "../../modals/login/OPTinput";

const RegVerifyCode = () => {
  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{ n1: "", n2: "", n3: "", n4: "", n5: "" }}
        onSubmit={(values) => {
          const code = Object.values(values).join("");
          console.log("OTP Code:", code);
        }}
      >
        <div className="w-full h-93">
          <h2 className="font-extrabold text-4xl m-0">{AuthData[15].title}</h2>
          <Form className="w-full h-full flex flex-col justify-evenly items-center">
            <span className="text-start font-light text-sm">
              {AuthData[6].title}
            </span>
            <div className="w-full flex" dir="ltr">
              <OTPInputCode />
            </div>

            <div className="flex justify-around mt-3">
              <p className="text-blue-500 text-xl">1:34</p>
            </div>

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

export { RegVerifyCode };
