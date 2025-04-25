// import { Fragment } from "react";
// import { Field, Form, Formik } from "formik";
// import { AuthData } from "../../../core/constants/mock/AuthData";

// const RegisterFinish = () => {
//   return (
//     <Fragment>
//       <Formik
//         initialValues={{ email: "", password: "", confirmPassword: "" }}
//         onSubmit={(values) => {
//           console.log("Form values:", values);
//         }}
//       >
//         <Form className="w-full h-93 flex flex-col justify-evenly items-center">
//           <Field
//             className="input validator w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
//             name="email"
//             type="email"
//             placeholder="ایمیل"
//           />
//           <div className="validator-hint">Enter valid email address</div>

//           <Field
//             type="password"
//             name="password"
//             className="input validator w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
//             required
//             placeholder="رمز عبور"
//             minLength={8}
//             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//             title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//           />
//           <Field
//             type="password"
//             name="confirmPassword"
//             className="input validator w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5"
//             required
//             placeholder="تکرار رمز عبور"
//             minLength={8}
//             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//             title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//           />

//           <p className="validator-hint">
//             Must be more than 8 characters, including
//             <br />
//             At least one number
//             <br />
//             At least one lowercase letter
//             <br />
//             At least one uppercase letter
//           </p>

//           <button
//             type="submit"
//             className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5"
//           >
//             {AuthData[12]?.title}
//           </button>
//         </Form>
//       </Formik>
//     </Fragment>
//   );
// };

// export default RegisterFinish;
