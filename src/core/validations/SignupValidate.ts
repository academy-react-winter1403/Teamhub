import * as Yup from "yup"

export const SignupCodeSchema = Yup.object().shape({
  phoneNumber: Yup.string()
  .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن معتبر نیست")
  .required("شماره تلفن الزامی است")
});