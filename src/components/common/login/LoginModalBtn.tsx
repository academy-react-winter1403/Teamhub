import { Fragment } from "react/jsx-runtime"

const LoginModalBtn = () => {

    const showDialog= ()=>{
        const dialog=document.getElementById('my_modal_1') as HTMLDialogElement
        dialog.showModal()
    }

  return (
    <Fragment>
        <button className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white" onClick={()=>{showDialog()}}>ورود به حساب</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
    </Fragment>
  )
}

export {LoginModalBtn}