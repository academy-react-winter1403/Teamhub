import "./App.css";
import { MainRouter } from "../config/router/MainRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Landing } from './components/Pages/Landing-Page/Landing'

function App() {
  return (
    <>
      <MainRouter />
      <ToastContainer position="top-right" rtl />
    </>
  );
}

export default App;
