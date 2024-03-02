import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png"


const Paneladmin = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const navigate = useNavigate()

    return (
        <>
            <div >
                <nav className="container flex justify-between mt-2">
                    <img src={logo} alt="logo" className="w-40" />
                    <div className="items-center flex gap-x-32">
                        <button>Home</button>
                        <button>Aprobaciones</button>
                        <button>Calendario</button>
                    </div>
                    <div className="relative">
                        <button onClick={toggleDropdown} className="border-solid border-gray-400 border-[1px] p-2 rounded flex justify-start items-center gap-4">
                            Notificaciones
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                        {isOpen && (
                            <div className="absolute top-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100">Opción 1</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Opción 2</li>
                                    <li className="px-4 py-2 hover:bg-gray-100">Opción 3</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <button onClick={() => navigate("/")} className="shadow-xl rounded-full py-2 px-4 bg-[#9890D1FF] text-white text-center hover:bg-purple-900 ">
                        Logout
                    </button>
                </nav>
                <div className="relative flex justify-start items-center mt-10 h-96 bg-[#9890D1FF]">
                    <div className="mx-24 font-bold text-5xl">
                        <h1>Buen vecino</h1>
                        <h2 className="text-[#323842FF]">Panel de Administrador</h2>
                    </div>
                    <div className="bg-[#D0EBF699] absolute rounded-full inset-y-0 right-0 w-96 h-96"></div>
                </div>
                <div className="flex flex-col justify-between m-8">
                    <div className="m-auto">
                        <input type="search" className="border-2" placeholder="buscar" />
                        <button className="bg-blue-500 text-white px-4 py-2">category</button>
                    </div>
                    <div className="flex justify-center">
                        <table className=" table-auto border-2">
                            <thead>
                                <tr className=" bg-gray-100">
                                    <th className="px-4 py-2">Apto.</th>
                                    <th className="px-4 py-2">Torre</th>
                                    <th className="px-4 py-2">Residente</th>
                                    <th className="px-4 py-2">Teléfono</th>
                                    <th className="px-4 py-2">Vehiculo-PLACA</th>
                                    <th className="px-4 py-2">Propietario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1961</td>
                                    <td className="px-4 py-2">1961</td>
                                    <td className="px-4 py-2">1961</td>
                                    <td className="px-4 py-2">1961</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1972</td>
                                    <td className="px-4 py-2">1972</td>
                                    <td className="px-4 py-2">1972</td>
                                    <td className="px-4 py-2">1972</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                </tr>
                                <tr className="border-b-2">
                                    <td className="px-4 py-2">10</td>
                                    <td className="px-4 py-2">3</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                    <td className="px-4 py-2">1975</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Paneladmin;