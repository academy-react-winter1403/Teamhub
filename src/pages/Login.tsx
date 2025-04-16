import CustomNavbar from "../components/common/CustomNavbar";
import { AuthData } from "../core/constants/mock/AuthData";

import AuthPageLayout from "../components/layouts/AuthPageLayout";
import LoginPageForm from "../components/auth/ui/Login";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CustomNavbar title={AuthData[0].title} />
      <div className="divider"></div>

      <div className=" container h-[42rem] flex items-center justify-evenly">
        <div className="w-3/5 h-full flex justify-between bg-white rounded-3xl">
          <AuthPageLayout />
          <LoginPageForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
