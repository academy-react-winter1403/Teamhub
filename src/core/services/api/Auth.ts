import http from "../interceptor"
import { LoginResponse } from "../types/Auth";

export const LoginAPI = async (
    user: {phoneOrGmail: string; password:string; rememberMe:boolean})
    :Promise<LoginResponse | false> =>{
    try {
        const response = await http.post("/Sign/Login", user);
        return response.data as LoginResponse;
    } catch (error) {
        console.log(error)
        return false;

    }
}

export const sendSignupCode = async (user:{phone:number}) => {
    try {
        const response = await http.post("/Sign/SendVerifyMessage", user);
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const SignupCode = async (user:{ phone:number; verifyCode:number}) => {
    try {
        const response = await http.post("/Sign/VerifyMessage", user);
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const RegisterAPI = async (user: {phone:number; email:string; password:string}) => {
    try {
        const response = await http.post("/Sign/Register", user);
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const ForgetPassword = async(email:string) =>{
    try {
        const response =await http.post("/Sign/ForgetPassword", {email});
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const requestPasswordonCode = async(ConfigValue:string) =>{
    try {
        const response = await http.get(`/Sign/Reset/${ConfigValue}`);
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const ResetPasswordAPI = async(user:{userID:string; newPassword:string; resetValue:string}) =>{
    try {
        const response =await http.post("/Sign/Reset", user);
        return response;
    } catch (error) {
        console.log(error)
        return false;
    }
}