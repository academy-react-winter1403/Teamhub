import * as Yup from "yup";

export const loginSchema = Yup.object({
  phoneOrGmail: Yup.string()
    .trim()
    .required("الزامی است")
    .test("is-email-or-phone", "شماره یا ایمیل معتبر نیست", (value) => {
      const isEmail = Yup.string().email().isValidSync(value);
      const isPhone = /^09\d{9}$/.test(value);
      return isEmail || isPhone;
    }),
  password: Yup.string()
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  rememberMe: Yup.boolean(),
});
