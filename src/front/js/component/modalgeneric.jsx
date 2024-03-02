import React from 'react'
import '../../styles/index.css';
import { useState } from "react";

const Modalgeneric = () => {

    const [modalOpenSubmit, setModalOpenSubmit] = useState(false);
    const [modalOpenPublication, setModalOpenPublication] = useState(false);
    const [modalOpenReservation, setModalOpenReservation] = useState(false);


    const handleOpenModalSubmit = () => {
        setModalOpenSubmit(true);
    };


    const handleCloseModalSubmit = () => {
        setModalOpenSubmit(false);
    };

    const handleOpenModalPublication = () => {
        setModalOpenPublication(true);
    };


    const handleCloseModalPublication = () => {
        setModalOpenPublication(false);
    };

    const handleOpenModalReservation = () => {
        setModalOpenReservation(true);
    };


    const handleCloseModalReservation = () => {
        setModalOpenReservation(false);
    };



    return (
        <>
            <button onClick={handleOpenModalSubmit} className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5'>
                Open modal
            </button>

            {modalOpenSubmit && (


                <div className="fixed inset-0 bg-black opacity-60 backdrop-blur-sm flex justify-center items-center">
                    <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                        <div className="grid grid-cols-2 ">
                            <div className="col-span-2 bg-slate-200">
                                <h5 className="mx-3 my-2 font-title font-bold">Tu suscripción está en proceso</h5></div>

                            <div className="bg-[#5549AF38] flex justify-center items-center relative ">
                                <h3 className="font-body text-black text-4xl mx-5">Felicitaciones!</h3>
                                <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 "> </i>
                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5"> </i></div>

                            <div className="bg-white mx-5">
                                <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>


                                <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">Información recibida</h5>
                                <p className='font-body text-black mb-3'>
                                    Hemos recibido tu información
                                </p>
                                <p className="font-body text-black">
                                    En este momento tu perfil está siendo estudiado y te estaremos avisándo cuando tu  aprobación esté lista.
                                </p>
                                <div className="flex items-center justify-end mt-5 mb-5 ">
                                    <button onClick={handleCloseModalSubmit} data-modal-hide="default-modal" type="button" className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white">Salir</button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>)}


            <button onClick={handleOpenModalPublication} className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5'>
                Open modal
            </button>

            {modalOpenPublication && (


                <div className="fixed inset-0 bg-black opacity-60 backdrop-blur-sm flex justify-center items-center">
                    <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                        <div className="grid grid-cols-2 ">
                            <div className="col-span-2 bg-slate-200">
                                <h5 className="mx-3 my-2 font-title font-bold">La aprobación de tu publicación está en proceso</h5></div>

                            <div className="bg-[#5549AF38] flex justify-center items-center relative ">
                                <h3 className="font-body text-black text-xl mx-5">Tu publicación está en proceso de aprobación, te avisaremos cuando esté listo</h3>
                                <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 "> </i>
                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5"> </i></div>

                            <div className="bg-white mx-5">
                                <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>


                                <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">Hemos recibido tu información</h5>
                                <p className='font-body text-black mb-3'>
                                    Hemos recibido tu información
                                </p>
                                <p className="font-body text-black">
                                    En este momento tu publicación  está siendo Revisada y te estaremos avisándo cuando se haga su respectiva aprobación.
                                </p>
                                <div className="flex items-center justify-end mt-5 mb-5 ">
                                    <button onClick={handleCloseModalPublication} data-modal-hide="default-modal" type="button" className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white">Salir</button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>)}




            <button onClick={handleOpenModalReservation} className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5'>
                Open modal
            </button>

            {modalOpenReservation && (


                <div className="fixed inset-0 bg-black opacity-60 backdrop-blur-sm flex justify-center items-center">
                    <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                        <div className="grid grid-cols-2 ">
                            <div className="col-span-2 bg-slate-200">
                                <h5 className="mx-3 my-2 font-title font-bold">La aprobación de tu reservacion está en proceso</h5></div>

                            <div className="bg-[#5549AF38] flex justify-center items-center relative ">
                                <h3 className="font-body text-black text-xl mx-5">
                                    Reserva de: Salón social
                                    Fecha: Febrero 17 de 2024
                                    Hora: 4 p.m
                                </h3>
                                <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 "> </i>
                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5"> </i></div>

                            <div className="bg-white mx-5">
                                <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>


                                <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">Información recibida</h5>
                                <p className='font-body text-black mb-3'>
                                    Hemos recibido tu solicitud de reserva
                                </p>
                                <p className="font-body text-black">
                                    En este momento tu reserva  está siendo Revisada y te estaremos avisándo cuando se haga su respectiva aprobación.
                                </p>
                                <div className="flex items-center justify-end mt-5 mb-5 ">
                                    <button onClick={handleCloseModalReservation} data-modal-hide="default-modal" type="button" className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white">Salir</button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>)}

        </>
    )
}

export default Modalgeneric;
