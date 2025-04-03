import { Fragment } from "react";
import { Header } from "../layouts/header/Header";
import { Footer } from "../layouts/footer/Footer";
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
