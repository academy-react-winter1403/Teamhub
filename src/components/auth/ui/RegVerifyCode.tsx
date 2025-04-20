import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { useState, useEffect } from "react";
import OTPInputCode from "../../modals/login/OPTinput";
import { OtpSchemaSeparate } from "../../../core/validations/OptValidate";

const RegVerifyCode = () => {
  const [seconds, setSeconds] = useState(95);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60)
      .toString()
      .padStart(1, "0");
    const second = (sec % 60).toString().padStart(2, "0");
    return `${minutes}:${second}`;
  };

  return (
    <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
      <Formik
        initialValues={{ n1: "", n2: "", n3: "", n4: "", n5: "" }}
        validationSchema={OtpSchemaSeparate}
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
              <p className="text-blue-500 text-xl">{formatTime(seconds)}</p>
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
