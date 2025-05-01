import { Header } from "../components/layouts/header/Header";
import { Footer } from "../components/layouts/footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-white">
      <div className="max-w-[1920px] w-full mx-auto">
        <Header />
        {/* <main className="px-4 sm:px-6 lg:px-8"> */}
        <Outlet />
        {/* </main> */}
        <Footer />
      </div>
    </div>
  );
};

export default Root;
