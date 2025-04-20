import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
import cart from "../../../assets/images/shopping-bag.svg"

const CartBtn = () => {
  return (
    <Fragment>

      <div className="indicator ">
        <span className="indicator-item h-6 w-6 bg-blue-400 rounded-2xl border-3 border-green-100 absolute top-2 right-2 text-sm text-white">
          2
        </span>
        <Link
          to="/Cart"
          className="btn bg-white h-12 w-12 rounded-3xl flex p-0 border-none"
        >
         <img src={cart} className="border-2 w-7 m-auto border-none" alt="" />
        </Link>
      </div>
    </Fragment>
  );
};

export { CartBtn };
