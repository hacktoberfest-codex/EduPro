import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.gif";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="fixed shadow-md w-full h-15 px-2 md: px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} alt="Logo" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <nav className="flex gap-5 md:gap-8 text-base md:text-md">
            <Link to={""} className="nav-link">
              Home
            </Link>
            <Link to={"classroom"} className="nav-link">
              Classroom
            </Link>
            <Link to={"purchase"} className="nav-link">
              Purchase
            </Link>
            <Link to={"about"} className="nav-link">
              About
            </Link>
            <Link to={"contact"} className="nav-link">
              Contact
            </Link>
          </nav>
          <div className="text-2xl text-black-600 relative">
            <BsCartFill />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center">
              0
            </div>
          </div>
          <div className="text-black-600 relative">
            <div
              className={`text-3xl cursor-pointer ${showMenu ? "active" : ""}`}
              onClick={handleShowMenu}
            >
              <HiOutlineUserCircle />
            </div>
            <div
              className={`absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col ${
                showMenu ? "show" : ""
              }`}
            >
              <Link to={"loginS"} className="whitespace-nowrap cursor-pointer">
                Student
              </Link>
              <Link to={"loginT"} className="whitespace-nowrap cursor-pointer">
                Teacher
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
