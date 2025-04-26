import { toast } from "react-toastify";
import { postFunc } from "../../../core/services/api/Post";
import { setItemLocalStorage } from "../../../core/hooks/localStorage/setItems";
import { AxiosError } from "axios";

interface ApiResponse {
  success?: boolean;
  message?: string;
  ErrorMessage?: string[];
  ErrorType?: string;
  StatusCode?: number;
}

interface DataType {
  data: ApiResponse;
}

export const sendVerificationCode = async (
  phoneNumber: string,
  redirectOnSuccess?: boolean
): Promise<DataType> => {
  const cleanPhoneNumber = phoneNumber.replace(/['"]+/g, "");

  try {
    const response = (await postFunc("/Sign/SendVerifyMessage", {
      phoneNumber: cleanPhoneNumber,
    })) as DataType;

    if (response.data.success) {
      setItemLocalStorage("phoneNumber", cleanPhoneNumber);
      toast.success("کد تأیید ارسال شد");
      if (redirectOnSuccess) {
        setTimeout(() => {
          window.location.hash = "verifycode";
        }, 3000);
      }
    } else {
      const errorMessages = response.data.ErrorMessage
        ? response.data.ErrorMessage.join(", ")
        : response.data.message || "خطا در ارسال کد";
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

export const verifyOtp = async (
  phoneNumber: string,
  verifyCode: string,
  setSubmitting: (isSubmitting: boolean) => void
): Promise<DataType> => {
  const cleanPhoneNumber = phoneNumber.replace(/['"]+/g, "");

  try {
    setSubmitting(true);
    const response = (await postFunc("/Sign/VerifyMessage", {
      phoneNumber: cleanPhoneNumber,
      verifyCode,
    })) as DataType;

    if (response.data.success) {
      toast.success("کد ارسالی تایید شد");
      setTimeout(() => {
        window.location.hash = "finish";
      }, 4000);
      console.log("Verification successful:", response.data.message);
    } else {
      const errorMessages = response.data.ErrorMessage
        ? response.data.ErrorMessage.join(", ")
        : response.data.message || "خطا در اصالت کد";
      toast.warning(errorMessages);
    }

    return response;
  } catch (error) {
    let errorMessage = "خطا در ارتباط با سرور";
    if (error instanceof AxiosError && error.response?.data) {
      const apiError = error.response.data as ApiResponse;
      errorMessage = apiError.ErrorMessage
        ? apiError.ErrorMessage.join(", ")
        : apiError.message || "خطا در اصالت کد";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    console.error("Verify OTP error:", error);
    throw error;
  } finally {
    setSubmitting(false);
  }
};

export const resendOtp = async (
  phoneNumber: string,
  setIsResending: (isResending: boolean) => void,
  setSeconds: (seconds: number) => void
): Promise<void> => {
  try {
    setIsResending(true);
    await sendVerificationCode(phoneNumber, false);
    setSeconds(95);
  } catch (error) {
    console.error("Resend OTP error:", error);
  } finally {
    setIsResending(false);
  }
};

export const completeRegistration = async (
  phoneNumber: string,
  gmail: string,
  password: string,
  setSubmitting: (isSubmitting: boolean) => void
): Promise<DataType> => {
  const cleanPhoneNumber = phoneNumber.replace(/['"]+/g, "");

  try {
    setSubmitting(true);
    const response = (await postFunc("/Sign/Register", {
      phoneNumber: cleanPhoneNumber,
      gmail,
      password,
    })) as DataType;

    if (response.data.success) {
      toast.success("ثبت‌نام با موفقیت انجام شد");
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 3000);
    } else {
      const errorMessages = response.data.ErrorMessage
        ? response.data.ErrorMessage.join(", ")
        : response.data.message || "خطا در ثبت‌نام";
      toast.warning(errorMessages);
    }

    return response;
  } catch (error) {
    let errorMessage = "خطا در ارتباط با سرور";
    if (error instanceof AxiosError && error.response?.data) {
      const apiError = error.response.data as ApiResponse;
      errorMessage = apiError.ErrorMessage
        ? apiError.ErrorMessage.join(", ")
        : apiError.message || "خطا در ثبت‌نام";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    console.error("Complete registration error:", error);
    throw error;
  } finally {
    setSubmitting(false);
  }
};