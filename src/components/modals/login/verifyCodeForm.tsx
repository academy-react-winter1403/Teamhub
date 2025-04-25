// import { Form, Formik } from "formik";
// import { Link } from "react-router-dom";
// import { Fragment } from "react/jsx-runtime";
// import { AuthData } from "../../../core/constants/mock/AuthData";
// import OTPInput from "../../auth/ui/OPTinput";

// const VerifyCodeForm = () => {
//   return (
//     <Fragment>
//       <Formik
//         initialValues={{ n1: "", n2: "", n3: "", n4: "", n5: "" }}
//         onSubmit={(values) => {
//           const code = Object.values(values).join("");
//           console.log("OTP Code:", code);
//         }}
//       >
//         <div className="w-full h-93">
//           <Form className="w-full h-full flex flex-col justify-evenly items-center">
//             <span className="text-start font-light text-sm">
//               {AuthData[6].title}
//             </span>
//             <div className="w-full flex" dir="ltr">
//               <OTPInput />
//             </div>

//             <div className="flex justify-around mt-3">
//               <p className="text-blue-500 text-xl">1:34</p>
//             </div>

//             <button
//               type="submit"
//               className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-3"
//             >
//               {AuthData[0].title}
//             </button>
//             <div className="mt-2">
//               {AuthData[7].title}
//               <Link to="" className="text-blue-500 ">
//                 {AuthData[10].title}
//               </Link>
//             </div>
//           </Form>
//         </div>
//       </Formik>
//     </Fragment>
//   );
// };

// export { VerifyCodeForm };
