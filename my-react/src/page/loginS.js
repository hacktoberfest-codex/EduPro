import React, { useState } from 'react'
import stud from '../assets/stud.gif'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import "./login.css" 
const Login = () => {
    const[showPassword, setShowPassword]=useState(false)
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
        const{email,password}=data
        if(email&&password){
                alert("success")
        }
        else{
            alert("please enter the required fields")
        }
    }
  return (
    <div className='p-3 md:p-4'>
    <div className=' qwe w-full max-w-sm bg-white m-auto flex items-center flex-col p-4' bg-blue>
       {/* <h1 className='text-center txt-2xl font-bold'>Sign Up</h1>*/}
       <div className='w-40 overflow-hidden'>
            <img src={stud} className='w-full flex item-center m-auto'/>
       </div>
       <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

            <label htmlFor='email'>Email</label>
            <input type={'email'} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange}></input>

            <label htmlFor='password'>password</label>
            <div className='flex  px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
            <input type={showPassword?'text':'password'} id='password' name='password' className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange}></input>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword?<BiShow/>:<BiHide/>}</span>
            </div>

            <button className='w-full max-w-[150px] m-auto bg-blue-300 hover:bg-blue-400 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
       </form>
       <p className='text-sm'>Don't have a account ? <Link to={'/signupS'} className='text-blue-400 underline'>Sign Up</Link></p>
    </div>
</div>
  )
}

export default Login;