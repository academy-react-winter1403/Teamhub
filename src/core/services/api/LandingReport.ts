import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

export const getLandingReport = async () =>{
    try {
        console.log("asd");
        const result = await axios.get(URL + "/Home/LandingReport");
        return result.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}