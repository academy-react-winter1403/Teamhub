import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";
import { getProfileInfo } from "../../../core/services/api/user/getProfileInfo";
import { removeItemLocalStorage } from "../../../core/hooks/localStorage/removeItem";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = getItemLocalStorage("token");
      if (token) {
        try {
          const profile = await getProfileInfo();
          if (profile) {
            setPhone(profile.phoneNumber);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Failed to fetch profile:", error);
          setIsLoggedIn(false);
          removeItemLocalStorage("token");
        }
      } else {
        setIsLoggedIn(false);
        removeItemLocalStorage("token");
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
