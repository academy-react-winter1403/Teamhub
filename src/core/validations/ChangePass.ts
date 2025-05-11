import * as Yup from "yup";

export const ChangePassSchema = Yup.object({
  oldPassword: Yup.string().required("الزامی است"),
  newPassword: Yup.string()
    .required("الزامی است")
    .min(8, "رمز عبور حداقل باید 8 کاراکتر باشد"),
});
