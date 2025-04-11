import { useState, Fragment } from "react";
import { LoginForm } from "./LoginForm";
import { VerifyCodeForm } from "./verifyCodeForm";
import RegisterFinish from "./RegisterFinish";
import RegisterModal from "./RegisterModal";
import { AuthData } from "../../../core/constants/mock/AuthData";

const LoginModalBtn = () => {
  const [step, setStep] = useState(5);

  console.error(setStep);

  // const nextStep = () => setStep((prev) => prev + 1);
  // const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <LoginForm />;
      case 2:
        return <VerifyCodeForm />;
      case 3:
        return <RegisterModal />;
      case 4:
        return <VerifyCodeForm />;
      case 5:
        return <RegisterFinish />;
      default:
        return null;
    }
  };

  const showDialog = () => {
    const dialog = document.getElementById("my_modal_1") as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <Fragment>
      <button
        className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white"
        onClick={showDialog}
      >
        {AuthData[0].title}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-105 h-122 rounded-3xl">
          <div className="modal-action flex justify-between items-center m-0">
            <form method="dialog">
              <h2 className="font-extrabold text-4xl m-0">
                {step === 1 && AuthData[0].title}
                {step === 2 && AuthData[5].title}
                {step === 3 && AuthData[3].title}
                {step === 4 && AuthData[5].title}
                {step === 5 && AuthData[0].title}
              </h2>
              <button className="btn btn-circle btn-ghost absolute left-2 top-2">
                ✕
              </button>
            </form>
          </div>
          {renderStep()}
        </div>
      </dialog>
    </Fragment>
  );
};

export { LoginModalBtn };
