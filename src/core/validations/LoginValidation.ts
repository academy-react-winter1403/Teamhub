import * as Yup from "yup";

export const loginSchema = Yup.object({
    phoneOrGmail:Yup.string()
    .required(" الزامی است")
    .test("is-email-or-phone", "شماره یا ایمیل معتبر نیست", value => {
        if (!value) return false;
        const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
        const isPhone =/^09\d{9}$/.test(value);
        return isEmail || isPhone;
    }),
    password:Yup.string().min(8,"رمز عبور حداقل باید 8 کاراکتر باشد").required("رمز عبور الزامی است")    
});