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
