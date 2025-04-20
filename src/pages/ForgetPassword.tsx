import { useState } from "react";
import CustomNavbar from "../components/common/CustomNavbar";
import AuthPageLayout from "../components/layouts/AuthPageLayout";
import { AuthData } from "../core/constants/mock/AuthData";
import ForgetPass from "../components/auth/ui/ForgetPass";
import { RegVerifyCode } from "../components/auth/ui/RegVerifyCode";

const ForgetPassword = () => {
  const [PassData] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <CustomNavbar title={AuthData[0].title} />
      <div className="divider"></div>

      <div className=" container h-[42rem] flex items-center justify-evenly">
        <div className="w-3/5 h-full flex justify-between bg-white rounded-3xl">
          <AuthPageLayout />
          {PassData.length === 0 ? (
            <ForgetPass />
          ) : PassData.length === 1 ? (
            <RegVerifyCode />
          ) : (
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
