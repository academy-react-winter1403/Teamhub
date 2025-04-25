import { Form, Formik } from "formik";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { useState, useEffect } from "react";
import OTPInputCode from "./OPTinput";
import { OtpSchemaSeparate } from "../../../core/validations/OptValidate";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";
import { ToastContainer } from "react-toastify";
import { resendOtp, verifyOtp } from "../func/authServices";
// import { verifyOtp, resendOtp } from;

const RegVerifyCode = () => {
  const phoneNumber: string = getItemLocalStorage("phoneNumber") || "Unknown";
  const [seconds, setSeconds] = useState(95);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSubmit = async (
    values: { n1: string; n2: string; n3: string; n4: string; n5: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const code = Object.values(values).join("");
    console.log("OTP Code:", code);
    await verifyOtp(phoneNumber, code, setSubmitting);
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ n1: "", n2: "", n3: "", n4: "", n5: "" }}
        validationSchema={OtpSchemaSeparate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-[90%] h-full flex flex-col justify-evenly items-center">
            <span className="text-start font-light text-sm">
              {AuthData[18].title}
              {phoneNumber}
              {AuthData[19].title}
            </span>
            <div className="w-full flex" dir="ltr">
              <OTPInputCode />
            </div>
            <div className="flex justify-around mt-3">
              <p className="text-blue-500 text-xl">
                {seconds > 0 ? formatTime(seconds) : "Time's up!"}
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-3"
            >
              {isSubmitting ? "در حال دریافت..." : AuthData[0].title}
            </button>
            <div className="mt-2">
              {AuthData[7].title}
              <button
                type="button"
                onClick={
                  seconds === 0
                    ? () => resendOtp(phoneNumber, setIsResending, setSeconds)
                    : undefined
                }
                disabled={seconds > 0 || isResending}
                className={`text-blue-500 hover:underline ${
                  seconds > 0 || isResending
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isResending
                  ? "Sending..."
                  : seconds > 0
                  ? AuthData[10].title
                  : "ارسال مجدد کد"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { RegVerifyCode };
