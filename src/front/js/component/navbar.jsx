import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';
import buenlogo from '../../img/buenlogo.png';



const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-4">
        <img src={buenlogo} alt="logo" className="h-20 w-30 mr-10 mt-3" />

        <div className="flex items-center flex-shrink-0 text-white mr-6">


        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded bg-white text-black-200 border-teal-400 hover:text-indigo-600 hover:border-black">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md font-body lg:flex-grow lg:flex justify-around ">
            <a href="#quienes-somos" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-600 mr-4">
              Acerca de nosotros
            </a>
            <a href="#caracteristicas" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-600 mr-4 font-body">
              Características
            </a>
            <a href="#responsive-header"><Link to={'/login'} button className="bg-[#796FC3FF] mt-3 lg:inline-block lg:mt-0  text-white-600 hover:bg-[#796FC3FF] text-white font-body py-2 px-4 rounded-full ms-5">
              Iniciar sesión</Link></a>
          </div>
          <div>


          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar;


