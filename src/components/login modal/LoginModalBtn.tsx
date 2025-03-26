import { Fragment } from "react/jsx-runtime"
import { LoginForm } from "./LoginForm"
import { VerifyCodeForm } from "./verifyCodeForm"

const LoginModalBtn = () => {

    const showDialog= ()=>{
        const dialog=document.getElementById('my_modal_1') as HTMLDialogElement
        dialog.showModal()
    }

    const showForm= ()=> {
      return <VerifyCodeForm/>
    }

  return (
    <Fragment>
        <button className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white" onClick={()=>{showDialog()}}>ورود به حساب</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box rounded-3xl">
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-circle btn-ghost absolute left-2 top-2">✕</button>
                </form>
              </div>
              {showForm()}
              {/* <LoginForm/> */}
            </div>
          </dialog>
    </Fragment>
  )
}

export {LoginModalBtn}