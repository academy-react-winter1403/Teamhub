import { useLocation } from "react-router-dom";
import LoginPageForm from "../components/auth/ui/Login";
import { AuthData } from "../core/constants/mock/AuthData";
import { useEffect, useState } from "react";
// import LoginTwoStep from "../components/auth/ui/LoginTwoStep";
import AuthPageLayout from "../components/layouts/AuthPageLayout";

const Login = () => {
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
    <div className=" container h-[42rem] flex items-center justify-evenly">
      <div className="w-3/5 h-full flex justify-between bg-white rounded-3xl pt-32 pb-10 m-auto">
        <AuthPageLayout />
        <div className="w-1/2 h-full flex flex-col items-center justify-evenly border-l-2 border-t-2 border-b-2 rounded-l-3xl">
          <h2 className="font-extrabold text-4xl m-0">{AuthData[0].title}</h2>
          <div className="w-full h-93 ">
            {currentHash === "" && <LoginPageForm />}
            {/* {currentHash === "#LoginTwoStep" && <LoginTwoStep />} // برای دور دوم */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
