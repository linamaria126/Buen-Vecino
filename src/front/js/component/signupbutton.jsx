import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/index.css';
import image1285 from '../../img/image1285.png';
import image1295 from '../../img/image1295.png';
import image3 from '../../img/image3.png';
import image4 from '../../img/image4.png';
import image5 from '../../img/image5.png';
import image6 from '../../img/image6.png';
import image8 from '../../img/image8.png';
import image7 from '../../img/image7.png';
import house from '../../img/house.png';
import caract_board from '../../img/caract_board.png';
import registro from '../../img/registro.png';
import espacios_img from '../../img/espacios_img.png';
import landingphoto from '../../img/landingphoto.jpg';

const Signupbutton = () => {
    return (
        <div ClassName="container">
            <div className="grid lg:grid-cols-3 grid-rows-3 bg-[#9890D1FF] relative">
                <div className="relative">
                    <img src={image1285} alt="1285" className="h-20 w-20 rounded-full bg-[#E2F0DBFF] absolute bottom-0 left-20" />
                </div>
                <div className="col-start-3">
                    <img src={image1295} alt="1295" className="h-30 w-40 rounded-full bg-[#D6D3EDFF] mt-5" />
                </div>
                <div className="relative flex justify-end items-end h-full">
                    <img src={image5} alt="5" className="lg:h-60 lg:w-60 rounded-full bg-[#D6D3EDFF] absolute bottom-0 right-0 lg:static" />
                </div>
                <div className="m-auto text-center">
                    <h4 className="text-2xl mb-2 text-white font-body"> Buen Vecino - Conectando Residentes</h4>
                    <h1 className="text-6xl font-bold text-white font-title mb-2">Plataforma de Servicios Vecinales</h1>
                    <Link to={'/userRegister'} button className="bg-white   lg:inline-block lg:mt-0 text-[#796FC3FF] hover:bg-[#796FC3FF] text-[#796FC3FF] font-body py-2 px-2 rounded-full md:mt-3 ms-5">
                        Registrate</Link>
                </div>

                <div className=" relative flex justify-center items-center h-full">
                    <img src={image4} alt="4" className="h-20 w-20 rounded-full bg-[#E2F0DBFF] absolute" />

                </div>


                <div className="relative">
                    <img src={image6} alt="6" className=" h-20 w-30 lg:h-30 w-30 rounded-full bg-[#D0EBF6FF] ml-10 mt-1" />
                </div>
                <div className="relative">
                    <img src={image7} alt="7" className="h-20 w-30 rounded-full md:mt-2 s bg-[#E2F0DBFF] absolute right-5" />
                    <img src={image8} alt="8" className="h-30 w-25 rounded-full bg-[#FFDFF1FF] absolute mt-10" />


                </div>
                <div className="relative flex justify-end items-end h-full">
                    <img src={image3} alt="3" className="lg:h-60 w-60 rounded-full bg-[#FFDFF1FF] absolute bottom-2 left-0" />
                </div>


            </div>
        </div >
    )
}

export default Signupbutton;