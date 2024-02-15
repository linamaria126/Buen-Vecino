import React, { useState } from "react";
import Navbar from "./navbar.jsx";

const ModalBoard = () => {
    const [modalClose, setModalClose] = useState(false)
    return (

        <div>
            
            <div className="container ">
                <div className="flex flex-row">
                    {/* svg representa el icono traido de tailwind */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                        />
                    </svg>
                    <h1 className="font-bold ">Board de negocios</h1>
                </div>

                <button className="mt-4 bg-[#796FC3FF] text-white rounded-full hover:bg-[#554e88] p-2" onClick={() => setModalClose(true)}>Agregar tu publicacion</button>

                {/* de aqui sale el modal  */}
                {modalClose && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-baseline pt-12 ">
                        <div className="bg-white p-5 rounded flex flex-col  gap-5 w-[600px]">
                            <div>
                                <label className=" w-[500px] flex justify-start mr-3 font-semibold" For="publicacion">Agrega tu publicacion</label>
                                <textarea type="text" id="publicacion" placeholder="Contenido" className="form-control  rounded-lg px-2 border-gray-300 mt-3 flex items-center justify-center" />
                            </div>
                            <div className="flex space-x-3">
                                <button className="mt-4 bg-[#796FC3FF] text-white rounded-full hover:bg-[#554e88] p-2" onClick={() => setModalClose(false)}>
                                    Close modal
                                </button>
                                <button className="mt-4 bg-[#6BC1E2FF] text-white rounded-full hover:bg-[#60acca] p-2" onClick={() => setModalClose("")}>
                                    Publicar
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>

        </div>
    );
};

export default ModalBoard