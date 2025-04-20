import http from "../interceptor"

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