import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.gif";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu =()=>{
        setShowMenu(preve=> !preve)
    }
    return (
        <header className='fixed shadow-md w-full h-15 px-2 md: px-4 z-50 bg-white'>
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className='h-16'>
                        <img src={logo} className="h-full" />
                    </div>
                </Link>

                <div className='flex items-center gap-5 md:gap-8'>
                    <nav className='flex gap-5 md:gap-8 text-base md:text-md'>
                        <Link to={""}>Home</Link>
                        <Link to={"classroom"}>Classroom</Link>
                        <Link to={"purchase"}>Purchase</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className='text-2xl text-black-600 relative'>
                        <BsCartFill />
                        <div className='absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center'>0</div>
                    </div>
                    <div className=' text-black-600' onClick={handleShowMenu}>
                        <div className='text-3xl cursor-pointer' >
                            <HiOutlineUserCircle />
                        </div>
                        {
                            showMenu && (<div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                                <Link to={"login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
                            </div>)
                        }

                    </div>
                </div>
            </div>



        </header>
    )
}

export default Header