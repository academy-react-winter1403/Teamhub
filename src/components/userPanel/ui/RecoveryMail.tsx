import { ErrorMessage, Field, Form, Formik } from "formik";
import { RecoveryMailSchema } from "../../../core/validations/RecoveryMail";

const RecoveryMail = () => {
  return (
    <>
      <Formik
        initialValues={{
          recoveryMail: "",
        }}
        // onSubmit={onSubmit}
        validationSchema={RecoveryMailSchema}
      >
        <Form className="">
          <Field
            dir="ltr"
            className="w-2/10 h-8 rounded-lg border pl-2"
            name="recoveryMail"
            placeholder="Example@gmail.com"
          />
          <ErrorMessage
            name="recoveryMail"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </Form>
      </Formik>
    </>
  );
};

export default RecoveryMail;
