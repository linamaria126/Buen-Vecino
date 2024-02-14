import React from "react";
import logo from "../../img/logo.png";
import image1290 from "../../img/image1290.png";
import image2 from "../../img/Image2.png";

const Homeuser = () => {
  return (
    <>
      <nav className="container flex justify-between mt-2">
        <img src={logo} alt="logo" />
        <button className="rounded-full py-2 px-4 bg-[#796FC3FF] text-white text-center hover:bg-purple-900 ">
          Logout
        </button>
      </nav>
      <div className="relative mt-10 h-96 bg-[#796FC3FF] flex justify-center">
        <div className="absolute left-48 bottom-56 purple-200">
          <img
            src={image1290}
            alt="women with hair large"
            className="rounded-full w-36 h-36 bg-slate-300 purple-200 bg-[#FFDFF1FF]"
          />
        </div>
        <div className="absolute left-96 bottom-40">
          <img
            src={image2}
            alt="f"
            className="rounded-full w-28 h-28 bg-slate-300"
          />
        </div>
        <div className="flex items-stretch justify-around rounded-t-full w-96 h-56 bg-slate-300 absolute bottom-0">
          <p className="py-20 text-3xl text-center text-white font-black">
            Buen vecino <br /> Portal de Residente
          </p>
        </div>
        <div className="absolute right-96 bottom-40">
          <img
            src=""
            alt="f"
            className="rounded-full w-36 h-36 bg-slate-300 "
          />
        </div>
        <div className="absolute right-52 bottom-64">
          <img
            src=""
            alt="f"
            className="rounded-full w-28 h-28 bg-slate-300 "
          />
        </div>
      </div>
      <div className="flex justify-center gap-36 mt-20">
        <article className="flex justify-evenly flex-col h-64 bg-gray-300">
          <i></i>
          <h1 className="text-lg text-center">Board de negocios</h1>
          <p className="mx-3 text-base text-center">
            Labore proident nisi fugiat nostrud
          </p>
        </article>
        <article className="flex justify-evenly flex-col h-64 bg-gray-300">
          <i></i>
          <h1 className="text-lg text-center">Reserva aquí</h1>
          <p className="mx-3 text-base text-center">
            Labore proident nisi fugiat nostrud
          </p>
        </article>
      </div>
      <div className="container">
        <hr className="mt-28" />
      </div>
      <footer>
        <i>a</i>
        <i>a</i>
        <i>a</i>
        <i>a</i>
      </footer>
    </>
  );
};

export default Homeuser;
