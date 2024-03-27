
// import Header from '../nav/Header';
import { useFormik } from 'formik';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initialValues = {

    email: "",
    password: "",
}
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email is Required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (
        !/(?=.*[a-z])/.test(values.password) ||
        !/(?=.*[A-Z])/.test(values.password) ||
        !/(?=.*\d)/.test(values.password) ||
        !/(?=.*[!@#$%^&*()_+])/.test(values.password)
    ) {
        errors.password = `Password must contain at  least one uppercase letter, one lowercase letter, one number, and one Special Characters`;
    }
    return errors;
}

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleFormSubmit = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(errorCode.split('/')[1]);
                
            });
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            handleFormSubmit(values?.email, values?.password)
        },
        validate,
    })

    return (
        <div>
          
            <div className='absolute' >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background" />
            </div>

            <form className='absolute bg-black bg-opacity-85
             w-3/12 py-12 px-12 my-32 mx-auto right-0 text-white left-0 ' onSubmit={formik.handleSubmit}>
                <h1 className='font-semibold text-2xl py-3'>Sign In</h1>

                <div className='w-full '>
                    <input type="email" name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 m-2 w-full bg-[#333333] focus:bg-[#333] outline-none '
                        placeholder='Enter Email ' id="email" />
                    <p className='text-red-400 text-xs'>{formik?.errors?.email && formik.touched.email && formik?.errors?.email}</p>
                </div>
                <div className='w-full'>
                    <input type="password" name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 m-2 w-full bg-[#333333]'
                        placeholder='Enter Password ' id="password" />
                    <p className='text-red-400 text-xs'>{formik?.errors?.password && formik.touched.password && formik?.errors?.password}</p>
                </div>
                <button disabled={formik?.errors?.email || formik?.errors?.password} type='submit'
                    className='py-2 px-6 mx-2 my-4 w-full bg-[#C11119] rounded-lg disabled:opacity-85 disabled:bg-red-200'>Sign In</button>
                <p className='text-red-400 text-sm mx-2'>{errorMessage}</p>
                
                <p className='mx-2 ' ><span className='text-gray-600'>New to Netflix?</span>
                    <Link className='cursor-pointer hover:underline mx-2' to={'/'} >Sign Up</Link></p>
            </form>

        </div>
    )
}

export default Login