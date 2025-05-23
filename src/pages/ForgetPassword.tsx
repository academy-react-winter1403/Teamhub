import { useEffect, useState } from "react";
import ForgetPass from "../components/auth/ui/ForgetPass";
import { RegVerifyCode } from "../components/auth/ui/RegVerifyCode";
import { AuthData } from "../core/constants/mock/AuthData";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const location = useLocation();
  const [currentHash, setCurrentHash] = useState(location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
        <h2 className="font-extrabold text-4xl m-0">{AuthData[0].title}</h2>
        <div className="w-full h-93">
          {currentHash === "" && <ForgetPass />}
          {currentHash === "#LoginTwoStep" && <RegVerifyCode />}
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
