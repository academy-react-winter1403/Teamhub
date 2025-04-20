import * as Yup from "yup"

export const SignupCodeSchema = Yup.object({
    Phone:Yup.string()
    .required("شماره موبایل الزامی است")
  .matches(/^09\d{9}$/, "شماره معتبر نیست")
});