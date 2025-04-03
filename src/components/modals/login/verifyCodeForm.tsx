import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const VerifyCodeForm = () => {
  return (
    <Fragment>
        <h3 className="font-bold text-xl w-50">کد تاییدیه</h3>

        <Formik
        initialValues={{email:"", password:""}} 
        onSubmit={() => {}}
        validationSchema={""}>
            <div className="">
                <Form>
                    <Field type="text" max-length="1" pattern="[0-9]" className="w-13 p-4  border-1 border-gray-300 rounded-2xl m-3" name="n1" placeholder="___"/>
                    <Field type="text" max-length="1" pattern="[0-9]" className="w-13 p-4  border-1 border-gray-300 rounded-2xl m-3" name="n1" placeholder="___"/>
                    <Field type="text" max-length="1" pattern="[0-9]" className="w-13 p-4  border-1 border-gray-300 rounded-2xl m-3" name="n1" placeholder="___"/>
                    <Field type="text" max-length="1" pattern="[0-9]" className="w-13 p-4  border-1 border-gray-300 rounded-2xl m-3" name="n1" placeholder="___"/>
                    <Field type="text" max-length="1" pattern="[0-9]" className="w-13 p-4  border-1 border-gray-300 rounded-2xl m-3" name="n1" placeholder="___"/>

                    <div className="flex justify-around mt-3">
                        <p className="text-blue-500 text-xl">1:34</p>
                    </div>

                    <button type="submit" className="btn w-50 h-12 rounded-3xl bg-blue-500 text-white mt-3">ورود به حساب</button>
                    <div className="mt-2">کد ارسال نشد؟
                    <Link to="" className="text-blue-500 ">ارسال دوباره</Link>
                    </div>
                </Form>
            </div>
        </Formik>
    </Fragment>
  )
}

export {VerifyCodeForm}