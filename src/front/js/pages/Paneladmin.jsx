import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavbarAdmin from "../component/NavbarAdmin.jsx";
import { Context } from "../store/appContext";
const Paneladmin = () => {
    const { store, actions } = useContext(Context)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10
    const totalItems = store.users.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = store.users.slice(indexOfFirstItem, indexOfLastItem);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const navigate = useNavigate()
    // useEffect(() => {
    //     const getData = async () => {
    //         await actions.getAllUnis()
    //     }
    //     getData()
    // }, [])
    useEffect(() => {
        actions.getAllResidentsByStatus(1, "Aprobado");
    }, []);
    return (
        <>
        <NavbarAdmin />
            
                
                <div className="relative flex justify-start items-center mt-10 h-96 bg-[#9890D1FF]">
                    <div className="mx-24 font-bold">
                        <h1 className="text-white text-7xl pb-3">Buen vecino</h1>
                        <h2 className="text-white text-4xl">Panel de Administrador</h2>
                    </div>
                    <div className="bg-[#D0EBF699] absolute rounded-full inset-y-0 right-0 w-96 h-96"></div>
                </div>
                <div className="flex flex-col justify-between m-8">
                    <div className="m-auto pb-5">
                        <input type="search" className="border-2" placeholder="buscar" />
                        <button className="text-black px-4 py-2">Filtrar</button>
                    </div>
                    <div className="flex justify-center">
                        <table className=" table-auto border-2">
                            <thead>
                                <tr className=" bg-gray-100">
                                    {/* <th className="px-4 py-2">Apto.</th>
                                    <th className="px-4 py-2">Torre</th> */}
                                    <th className="px-4 py-2">Nombres Residente</th>
                                    <th className="px-4 py-2">Apellidos Residente</th>
                                    <th className="px-4 py-2">Tipo de Residente</th>
                                    <th className="px-4 py-2">Cédula</th>
                                    <th className="px-4 py-2">Teléfono</th>
                                    <th className="px-4 py-2">Correo Electronico</th>
                                    {/* <th className="px-4 py-2">Placa de Vehículo</th>
                                    <th className="px-4 py-2">Marca del vehículo</th>
                                    <th className="px-4 py-2">Color del Vehículo</th>
                                    <th className="px-4 py-2">Modelo del Vehículo</th>
                                    <th className="px-4 py-2">Tipo de mascota</th>
                                    <th className="px-4 py-2">Raza de mascota</th>
                                    <th className="px-4 py-2">Nombre Mascota</th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {currentUsers.map((residente)=> {
                                return(
                                    <tr key={store.users.id} className="border-b-2">
                                    {/* <td className="px-4 py-2">{residente.pepito}</td>
                                    <td className="px-4 py-2">{residente.torre}</td> */}
                                    <td className="px-4 py-2">{residente.nombres}</td>
                                    <td className="px-4 py-2">{residente.apellidos}</td>
                                    <td className="px-4 py-2">{residente.tipo}</td>
                                    <td className="px-4 py-2">{residente.cedula}</td>
                                    <td className="px-4 py-2">{residente.celular}</td>
                                    <td className="px-4 py-2">{residente.email}</td>
                                    {/* <td className="px-4 py-2">{residente.placa_vehiculo}</td>
                                    <td className="px-4 py-2">{residente.marca_vehiculo}</td>
                                    <td className="px-4 py-2">{residente.color_vehiculo}</td>
                                    <td className="px-4 py-2">{residente.modelo_vehiculo}</td>
                                    <td className="px-4 py-2">{residente.pet_tipo}</td>
                                    <td className="px-4 py-2">{residente.raza}</td>
                                    <td className="px-4 py-2">{residente.pet_nombre}</td> */}
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            
        </>
    )
}
export default Paneladmin;