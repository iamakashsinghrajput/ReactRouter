import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate= useNavigate();

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password: "",
        confirmpassword: ""
    })

    const[showpassword, setshowpassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) =>(
            {
                ...prevData, 
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmpassword){
            toast.error("Passwords do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData= {
            ...formData
        };
        console.log("Printing Account Data", accountData);
        navigate("/dashboard");
    }

    return (  
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}>
                        Student
                </button>
                <button
                className={`${accountType === "instructor" 
                    ?
                      "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                        Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter your first name'
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name = 'lastname'
                            onChange={changeHandler}
                            placeholder='Enter your last name'
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup>*</sup></p>
                        <input
                            required
                            type='email'
                            name = 'email'
                            onChange={changeHandler}
                            placeholder='Enter your email address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>


                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showpassword ? ("text") : ("password")}
                            name = 'password'
                            onChange={changeHandler}
                            placeholder='Enter your password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setshowpassword((prev) => !prev)}>
                            {showpassword ? (<FaRegEye/>) : (<FaRegEyeSlash/>) }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text"):("password")}
                            name = 'confirmpassword'
                            onChange={changeHandler}
                            placeholder='Enter confirm password'
                            value={formData.confirmpassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<FaRegEye/>) : (<FaRegEyeSlash/>) }
                        </span>
                    </label>
                </div>
                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium
                 text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account</button>
            </form>
        </div>
    );
}
 
export default SignupForm;