import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { fetchUserProfile } from "../../../core/services/api/user/GetProfileInfo";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = getItemLocalStorage("token");
      if (token) {
        try {
          const profile = await fetchUserProfile();
          console.log(token);
          setPhone(profile.phoneNumber || "");
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <Link
      to={isLoggedIn ? "/userpanel" : "/login"}
      className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white"
    >
      {isLoggedIn ? phone || "پروفایل" : AuthData[0].title}
    </Link>
  );
};

export default Login;
