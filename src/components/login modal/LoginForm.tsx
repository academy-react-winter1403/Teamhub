import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const LoginForm = () => {
  return (
    <Fragment>
        <h3 className="font-bold text-2xl w-50">ورود به حساب</h3>

        <Formik
        initialValues={{email:"", password:""}} 
        onSubmit={() => {}}
        validationSchema={""}>
            <div className="">
                <Form>
                    <Field className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5" name="email" placeholder="ایمیل یا شماره موبایل"/>

                    <Field className="w-[90%] p-3 pr-7 border-1 border-gray-300 rounded-3xl mt-5" name="password" placeholder="رمز عبور"/>
                    <div className="flex justify-around mt-3">
                        <div>
                            <input name="remember" type="checkbox"/>
                            <label htmlFor="remember" className="m-3">من را به خاطر بسپار</label>
                        </div>
                        <Link to="" className="text-blue-500">رمز عبور را فراموش کردم</Link>
                    </div>

                    <button type="submit" className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-5">دریافت کد تایید</button>
                    <div className="mt-2">حساب کاربری ندارید؟
                    <Link to="" className="text-blue-500 ">ثبت نام</Link>
                    </div>
                </Form>
            </div>
        </Formik>
    </Fragment>
  )
}

export {LoginForm}