import * as Yup from "yup";

export const RecoveryMailSchema = Yup.object({
  recoveryEmail: Yup.string()
    .email("ایمیل نامعتبر است")
    .required("ایمیل الزامی است"),
});
