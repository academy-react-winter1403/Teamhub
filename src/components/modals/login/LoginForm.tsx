// // LoginForm.tsx
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { LoginFormValues } from "../../../core/services/types/Auth";
// import { loginSchema } from "../../..//core/validations/LoginValidation";
// import { LoginAPI } from "../../../core/services/api/Auth";

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormValues>({
//     resolver: yupResolver(loginSchema),
//     defaultValues: {
//       phoneOrGmail: "",
//       password: "",
//       rememberMe: false,
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     const res = await LoginAPI(data);

//     if (res) {
//       if (data.rememberMe) {
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("user", JSON.stringify(res));
//       } else {
//         sessionStorage.setItem("token", res.token);
//       }

//       console.log("ورود موفق");
//       // مثلا: navigate("/dashboard");
//     } else {
//       console.log("ورود ناموفق");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col gap-4 w-full max-w-md mx-auto p-4"
//     >
//       <input
//         className="p-2 border border-gray-300 rounded"
//         {...register("phoneOrGmail")}
//         placeholder="ایمیل یا شماره موبایل"
//       />
//       {errors.phoneOrGmail && (
//         <p className="text-red-500 text-sm">{errors.phoneOrGmail.message}</p>
//       )}

//       <input
//         type="password"
//         className="p-2 border border-gray-300 rounded"
//         {...register("password")}
//         placeholder="رمز عبور"
//       />
//       {errors.password && (
//         <p className="text-red-500 text-sm">{errors.password.message}</p>
//       )}

//       <label className="flex items-center gap-2">
//         <input type="checkbox" {...register("rememberMe")} />
//         مرا به خاطر بسپار
//       </label>

//       <button type="submit" className="bg-blue-500 text-white py-2 rounded">
//         ورود
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
