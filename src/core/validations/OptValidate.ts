import * as Yup from "yup";

export const OtpSchemaSeparate = Yup.object({
  n1: Yup.string()
    .matches(/^\d$/, "عدد یک‌رقمی وارد کن")
    .required("الزامی!"),
  n2: Yup.string()
    .matches(/^\d$/, "عدد یک‌رقمی وارد کن")
    .required("الزامی!"),
  n3: Yup.string()
    .matches(/^\d$/, "عدد یک‌رقمی وارد کن")
    .required("الزامی!"),
  n4: Yup.string()
    .matches(/^\d$/, "عدد یک‌رقمی وارد کن")
    .required("الزامی!"),
  n5: Yup.string()
    .matches(/^\d$/, "عدد یک‌رقمی وارد کن")
    .required("الزامی!"),
});
