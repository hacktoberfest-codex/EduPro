import React, { useState } from 'react'
import teach from '../assets/teach.gif'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link,useNavigate } from 'react-router-dom'
import "./signup.css"
const Signup = () => {
    const navigate=useNavigate();
    const[showPassword, setShowPassword]=useState(false)
    const[showConfirmPassword, setShowConfirmPassword]=useState(false)
    const[data, setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    console.log(data)
    const handleShowPassword=()=>{
        setShowPassword(prev=>!prev)
    }
    const handleShowConfirmPassword=()=>{
        setShowConfirmPassword(prev=>!prev)
    }
    const handleOnChange=(e)=>{
        const {name, value}=e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const{firstName,email,password,confirmPassword}=data
        if(firstName&&email&&password&&confirmPassword){
            if(password===confirmPassword){
                alert("success")
                navigate("/login")
            }
            else{
                alert("incorrect")
            }
        }
        else{
            alert("please enter the required fields")
        }
    }

  return (
    <div className='p-3 md:p-4'>
        <div className='qaz w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 relative' bg-blue>
           {/* <h1 className='text-center txt-2xl font-bold'>Sign Up</h1>*/}
           <div className='w-40 overflow-hidden'>
                <img src={teach} className='w-full flex item-center m-auto'/>

           </div>
           <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type={'text'} id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.firstName} onChange={handleOnChange}></input>

                <label htmlFor='lastName'>Last Name</label>
                <input type={'text'} id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.lastName} onChange={handleOnChange}></input>

                <label htmlFor='email'>Email</label>
                <input type={'email'} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange}></input>

                <label htmlFor='password'>password</label>
                <div className='flex  px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                <input type={showPassword?'text':'password'} id='password' name='password' className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange}></input>
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword?<BiShow/>:<BiHide/>}</span>
                </div>

                <label htmlFor='confirmpassword'>Confirm Password</label>
                <div className='flex  px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                <input type={showConfirmPassword?'text':'password'} id='confirmpassword' name='confirmPassword' className='w-full bg-slate-200 border-none outline-none' value={data.confirmPassword} onChange={handleOnChange}></input>
                <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword?<BiShow/>:<BiHide/>}</span>
                </div>

                <button className='w-full max-w-[150px] m-auto bg-blue-300 hover:bg-blue-400 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
           </form>
           <p className='text-sm'>Already have a account ? <Link to={'/loginT'} className='text-blue-400 underline'>Login</Link></p>
        </div>
    </div>
  );
}

export default Signup