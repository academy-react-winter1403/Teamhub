import { Fragment } from "react";
import { Header } from "../components/layouts/header/Header";
import { Footer } from "../components/layouts/footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Fragment>
      <Header />

      <Outlet />

      <Footer />
    </Fragment>
  );
};

export default Root;
