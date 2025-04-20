import { useState } from "react";
import SignupPageForm from "../components/auth/ui/Signup";
import CustomNavbar from "../components/common/CustomNavbar";
import AuthPageLayout from "../components/layouts/AuthPageLayout";
import { AuthData } from "../core/constants/mock/AuthData";
import RegisterFinish from "../components/auth/ui/RegisterFinish";
import { RegVerifyCode } from "../components/auth/ui/RegVerifyCode";

const Signup = () => {
  const [regData] = useState([]);
  return (
    <div className="container mx-auto px-4 py-8">
      <CustomNavbar title={AuthData[0].title} />
      <div className="divider"></div>

      <div className=" container h-[42rem] flex items-center justify-evenly">
        <div className="w-3/5 h-full flex justify-between bg-white rounded-3xl">
          <AuthPageLayout />
          {regData.length === 0 ? (
            <SignupPageForm />
          ) : regData.length === 1 ? (
            <RegVerifyCode />
          ) : regData.length === 2 ? (
            <RegisterFinish />
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
