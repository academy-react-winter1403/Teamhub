import { ErrorMessage, Field, Form, Formik } from "formik";
import { RecoveryMailSchema } from "../../../core/validations/RecoveryMail";

const RecoveryMail = () => {
  return (
    <div className="flex justify-evenly text-start flex-col gap-10 items-center">
      <Formik
        initialValues={{
          recoveryMail: "",
        }}
        // onSubmit={onSubmit}
        validationSchema={RecoveryMailSchema}
      >
        <Form className="fieldset w-2/10 ">
          <legend className="fieldset-legend">ایمیل بازیابی</legend>
          <Field
            dir="ltr"
            className=" h-8 rounded-lg border pl-2"
            name="recoveryEmail"
            placeholder="Example@gmail.com"
          />
          <ErrorMessage
            name="recoveryEmail"
            component="div"
            className="text-red-500 text-sm mt-1 "
          />
        </Form>
      </Formik>
      <div className="w-80 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>مایل به تغییر رمز عبور هستم</span>
          <input type="checkbox" className="checkbox" />
        </div>
        <button className="btn bg-[#3f40ea] text-white">ثبت اطلاعات</button>
      </div>
    </div>
  );
};

export default RecoveryMail;
