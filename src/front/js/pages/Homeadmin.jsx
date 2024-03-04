import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import image1 from "../../img/image1290.png";
import image2 from "../../img/image9.png";
import image3 from "../../img/image1.png";
import image4 from "../../img/image7.png";
import user_circle from "../../img/User_circle.png";
import Handshake from "../../icons/Handshake.js";
import Hause_admin from "../../img/Hause_admin.png";
import NavbarAdmin from "../component/NavbarAdmin.jsx";


const Homeadmin = () => {

  const navigate = useNavigate()

  return (
    <>
     <NavbarAdmin />

      <div className="relative mt-10 h-96 bg-[#9890D1FF] flex justify-center">
        <div className="absolute left-48 bottom-56 purple-200">
          <img
            src={image1}
            alt="d"
            className=" rounded-full w-36 h-36 bg-[#D6D3EDFF]"
          />
        </div>
        <div className="absolute left-96 bottom-40">
          <img
            src={image2}
            alt="f"
            className="rounded-full w-28 h-28 bg-[#FFDFF1FF]"
          />
        </div>
        <div className="flex items-stretch justify-around rounded-t-full w-96 h-56 bg-slate-300 absolute bottom-0">
          <p className="py-20 text-3xl text-center text-white font-black">
            Buen vecino <br /> Portal de <br /> Administrador
          </p>
        </div>
        <div className="absolute right-96 bottom-40">
          <img
            src={image3}
            alt="f"
            className="rounded-full w-36 h-36 bg-[#D0EBF6FF]"
          />
        </div>
        <div className="absolute right-52 bottom-64">
          <img
            src={image4}
            alt="f"
            className="rounded-full w-30 h-28 bg-[#F8F9FAFF] "
          />
        </div>
      </div>
      <div className="flex justify-center gap-36 mt-20">
        <article className="cursor-pointer rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 flex justify-around shadow-xl  flex-col w-72 h-64 bg-gray-300">
          <div className="flex justify-center bg-#9890D1FF">
            <Handshake onClick={() => navigate("/board")} className="w-40 fill-[#9890D1FF] font-black" />
          </div>
          <h1 className="text-2xl text-center font-bold">Board de negocios</h1>
          <p className="text-base text-center">
            Publica los eventos de tu Unidad y conecta a tus residentes
          </p>
        </article>
        <article className="cursor-pointer rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 flex justify-around shadow-xl  flex-col w-72 h-64 bg-gray-300">
          <div className="flex justify-center">
            <img onClick={() => navigate("/reservas")} src={user_circle} alt="" className="w-28" />
          </div>
          <h1 className="text-2xl text-center font-bold">Reserva aquí</h1>
          <p className="text-base text-center">
            Reserva los espacios de tu Unidad residencial
          </p>
        </article>
      </div>
      <div className="flex justify-center my-20">
        <article className="cursor-pointer rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 flex justify-around shadow-xl  flex-col w-72 h-64 bg-gray-300">
          <div className="flex justify-center">
            <img onClick={() => navigate("/paneladmin")} src={Hause_admin} alt="" className="w-28" />
            
          </div>
          <h1 className="text-2xl text-center font-bold">Panel de <br /> Administracion</h1>
          <p className="text-base text-center">
            Aprueba el ingreso de tus residentes y accede a sus datos
          </p>
        </article>
      </div>
      <div className="container">
        <hr className="mt-28 mx-2" />
      </div>
    </>
  )
};

export default Homeadmin;
