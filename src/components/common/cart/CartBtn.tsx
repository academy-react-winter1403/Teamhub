import { Fragment } from "react/jsx-runtime"

const CartBtn = () => {
  return (
    <Fragment>
        <div className="indicator ">
            <span className="indicator-item h-6 w-6 bg-blue-400 rounded-2xl border-3 border-green-100 absolute top-2 right-2 text-sm text-white">2</span>
            <button className="btn bg-white h-12 w-12 rounded-3xl flex">
            <img src="./shopping-bag.svg" className="border-2 w-10 m-auto " alt="" />
            </button>
        </div>  

    </Fragment>
  )
}

export {CartBtn}