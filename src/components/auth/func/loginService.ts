import { toast } from "react-toastify";
import { postFunc } from "../../../core/services/api/Post";
import { setItemLocalStorage } from "../../../core/hooks/localStorage/setItems";
import { AxiosError } from "axios";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";

interface ApiResponse {
  id?: number
  success?: boolean;
  message?: string;
  ErrorMessage?: string[];
  ErrorType?: string;
  StatusCode?: number;
  token?: string;
}

interface DataType {
  data: ApiResponse;
}

const showToast = (type: "success" | "error" | "warning", message: string) => {
  toast[type](message, { autoClose: 4000 });
};



export const sendLoginData = async (
  phoneOrGmail: string,
  password: string,
  rememberMe: boolean
): Promise<DataType> => {
  try {
    const response = (await postFunc("/Sign/Login", {
      phoneOrGmail,
      password,
      rememberMe,
    })) as DataType;

    if (response.data.success && rememberMe) {
      setItemLocalStorage("userCredentials", { phoneOrGmail, password });
      setItemLocalStorage("userId", response.data.id)
      if (response.data.token) {
        setItemLocalStorage("token", response.data.token);
      }
      showToast("success", "ورود با موفقیت انجام شد");
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
      // console.log("Login first step successful:", response.data.success);
      console.log(getItemLocalStorage("token"));
    } else if (response.data.success) {
      showToast("success", "ورود با موفقیت انجام شد");
      setItemLocalStorage("userId", response.data.id)
      if (response.data.token) {
        setItemLocalStorage("token", response.data.token);
        // console.log(getItemLocalStorage("token"));
      }
      console.log("Login first step successful:", response.data.success);
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } else {
      const errorMessages = response.data.ErrorMessage
        ? response.data.ErrorMessage.join(", ")
        : response.data.message || "خطا";
      toast.warning(errorMessages);
    }

    return response;
  } catch (error) {
    let errorMessage = "خطا در ارتباط با سرور";
    if (error instanceof AxiosError && error.response?.data) {
      const apiError = error.response.data as ApiResponse;
      errorMessage = apiError.ErrorMessage
        ? apiError.ErrorMessage.join(", ")
        : apiError.message || "خطا در ارسال کد";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    console.error("Send verification code error:", error);
    throw error;
  }
};
