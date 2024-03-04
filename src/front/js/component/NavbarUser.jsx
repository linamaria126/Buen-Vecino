import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import buenlogo from "../../img/buenlogo.png";


const NavbarUser = () => {
 const navigate = useNavigate();
  
  const logout = ()=>{
    navigate("/")
    localStorage.clear()
  }

  return (
    <>
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-6 flex items-center">
                <img
                 src={buenlogo}
                  alt="logo image"
                  className="h-20 w-30 mr-10 mt-3"
                />
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <Link to="/homeuser"
                  href="#"
                  className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
               
                
                <Link to="/board"
                  href="#"
                  className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Board de negocios
                </Link>
                <Link to="/reservas"
                  href="#"
                  className="text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Reservaciones
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-[#9890D1FF] hover:bg-purple-900 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition ease-in-out duration-150" 
              onClick={logout}>
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>

  )
};

export default NavbarUser;
