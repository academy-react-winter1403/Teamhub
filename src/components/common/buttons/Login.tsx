import { Link } from "react-router-dom";
import { AuthData } from "../../../core/constants/mock/AuthData";

const Login = () => {
  return (
    <>
      <Link
        to="/login"
        className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white"
      >
        {AuthData[0].title}
      </Link>
    </>
  );
};

export default Login;
