// import SignupPageForm from "../components/auth/ui/Signup";
import RegisterFinish from "../components/auth/ui/RegisterFinish";
import { RegVerifyCode } from "../components/auth/ui/RegVerifyCode";
import { AuthData } from "../core/constants/mock/AuthData";
import SignupStepOne from "../components/auth/ui/SignupStepOne";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
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
        <h2 className="font-extrabold text-4xl m-0">{AuthData[3].title}</h2>
        <div className="w-full h-93 flex flex-col justify-evenly items-center">
          {currentHash === "" && <SignupStepOne />}
          {currentHash === "#verifycode" && <RegVerifyCode />}
          {currentHash === "#finish" && <RegisterFinish />}
        </div>
      </div>
    </>
  );
};

export default Signup;
