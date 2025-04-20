import http from "../interceptor"
import { SignupStepOne ,SignupStepTwe,SignupStepThree } from "../types/Auth";

export const sendSignupCode = async (
    user:{phone:string}):Promise<SignupStepOne | false>=> {
    try {
        const response = await http.post("/Sign/SendVerifyMessage", user);
        return response.data as SignupStepOne;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const SignupCode = async (
    user:{ phone:string; verifyCode:string}):Promise<SignupStepTwe | false> => {
    try {
        const response = await http.post("/Sign/VerifyMessage", user);
        return response.data as SignupStepTwe
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const RegisterAPI = async (user: {phone:string; email:string; password:string}):Promise<SignupStepThree | false> => {
    try {
        const response = await http.post("/Sign/Register", user);
        return response.data as SignupStepThree
    } catch (error) {
        console.log(error)
        return false;
    }
}