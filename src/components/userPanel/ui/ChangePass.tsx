import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChangePassSchema } from "../../../core/validations/ChangePass";

const ChangePass = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
        }}
        // onSubmit ={onSubmit} //الان نمیخوام
        validationSchema={ChangePassSchema}
      >
        <Form className="fieldset text-start grid-cols-3 gap-5">
          <div className="w-64 flex flex-col ">
            <label className="label ">oldPassword</label>
            <Field
              dir="ltr"
              className="w-64 h-10 rounded-lg border pl-2"
              name="oldPassword"
              placeholder="12345678"
              type="text"
            />
            <ErrorMessage
              name="oldPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="w-64 flex flex-col ">
            <label className="label ">newPassword</label>

            <Field
              dir="ltr"
              className="w-64 h-10 rounded-lg border pl-2"
              name="newPassword"
              placeholder="12345678"
              type="text"
            />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="w-64 flex flex-col ">
            <label className="label ">confirm pass</label>

            <Field
              dir="ltr"
              className="w-64 h-10 rounded-lg border pl-2"
              name="newPassword"
              placeholder="12345678"
              type="text"
            />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </Form>
      </Formik>
      <div className="w-1/2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>مایل به تغییر رمز عبور هستم</span>
          <input type="checkbox" className="checkbox" />
        </div>
        <button className="btn bg-[#3f40ea] text-white">ثبت اطلاعات</button>
      </div>
    </div>
  );
};

export default ChangePass;
