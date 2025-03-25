import axios, { AxiosResponse, AxiosError} from "axios";
const baseURL = import.meta.env.VITE.VITE_API_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
})

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = (err: Error | AxiosError) => { 
    console.log(err);
  
    if (axios.isAxiosError(err) && err.response) { 
      if (err.response.status >= 400 && err.response.status < 500) {
        alert("client error: " + err.response.status);
      }
    } else {
      console.error("An unexpected error occurred:", err);
    }
  };

instance.interceptors.response.use(onSuccess, onError);


instance.interceptors.request.use((opt) => {
    opt.headers["MessageTest"] = "Hello World";
    return opt;
});

export default instance;