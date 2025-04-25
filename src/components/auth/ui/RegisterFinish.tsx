import { Field, Form, Formik } from "formik";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { RegisterFinishSchema } from "../../../core/validations/RegisterValidate";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";
import { ToastContainer } from "react-toastify";
import { completeRegistration } from "../func/authServices";

const RegisterFinish = () => {
  const phoneNumber: string = getItemLocalStorage("phoneNumber") || "Unknown";

  const onSubmit = async (
    values: { email: string; password: string; confirmPassword: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await completeRegistration(
        phoneNumber,
        values.email,
        values.password,
        setSubmitting
      );
    } catch (error) {
      // خطاها تو completeRegistration مدیریت شدن
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterFinishSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="w-full h-93 flex flex-col justify-evenly items-center">
            <Field
              className={`input validator w-[90%] p-3 pr-7 border-1 rounded-3xl mt-5 ${
                errors.email && touched.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              name="email"
              type="email"
              placeholder="ایمیل"
            />
            {errors.email && touched.email && (
              <div className="validator-hint text-red-500">{errors.email}</div>
            )}

            <Field
              type="password"
              name="password"
              className={`input validator w-[90%] p-3 pr-7 border-1 rounded-3xl mt-5 ${
                errors.password && touched.password
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="رمز عبور"
            />
            {errors.password && touched.password && (
              <div className="validator-hint text-red-500">
                {errors.password}
              </div>
            )}

            <Field
              type="password"
              name="confirmPassword"
              className={`input validator w-[90%] p-3 pr-7 border-1 rounded-3xl mt-5 ${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="تکرار رمز عبور"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="validator-hint text-red-500">
                {errors.confirmPassword}
              </div>
            )}

            <p className="validator-hint text-gray-600 mt-2">
              رمز عبور باید حداقل 8 کاراکتر باشد و شامل:
              <br />
              حداقل یک عدد
              <br />
              حداقل یک حرف کوچک
              <br />
              حداقل یک حرف بزرگ
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5 disabled:opacity-50"
            >
              {isSubmitting ? "در حال دریافت..." : AuthData[12]?.title}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterFinish;
