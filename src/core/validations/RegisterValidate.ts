import * as Yup from "yup";

export const RegisterFinishSchema = Yup.object().shape({
email: Yup.string()
    .email("ایمیل نامعتبر است")
    .required("ایمیل الزامی است"),
password: Yup.string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .matches(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
    "رمز عبور باید شامل عدد، حرف کوچک و بزرگ باشد"
    )
    .required("رمز عبور الزامی است"),
confirmPassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password"), null], "رمز عبور و تکرار آن مطابقت ندارند")
    .required("تکرار رمز عبور الزامی است"),
});