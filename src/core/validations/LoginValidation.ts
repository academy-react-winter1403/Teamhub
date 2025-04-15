import * as Yup from "yup";

export const loginSchema = Yup.object({
    phoneOrGmail:Yup.string()
    .required(" الزامی است")
    .test("is-email-or-phone", "شماره یا ایمیل معتبر نیست", value => {
        if (!value) return false;
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone =/^09\d{9}$/.test(value);
        return isEmail || isPhone;
    }),
    password:Yup.string().min(6,"رمز عبور حداقل باید 8 کاراکتر باشد").required("رمز عبور الزامی است")    
});