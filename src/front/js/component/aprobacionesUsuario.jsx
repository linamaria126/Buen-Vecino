import React, { useState, useContext , useEffect } from 'react';
import '../../styles/index.css';
import {Context} from '../store/appContext.js';
import Pagination from './pagination.jsx';
import { useNavigate , Link } from "react-router-dom";
import buenlogo from '../../img/buenlogo.png';




const Aprobaciones_usuario = () => {
    const {store, actions } = useContext(Context);
    const [selectedStatus, setSelectedStatus] = useState("Pendiente");
    const [isOpen, setIsOpen] = useState(false);



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5

    const totalItems = store.users.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = store.users.slice(indexOfFirstItem, indexOfLastItem);

    const statusUpdate = async(value, residentId) =>{
        
        const response = await actions.putUpdatedStatus(residentId, value)
        if(response) {actions.getAllResidentsByStatus(1, "Pendiente")} 
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const navigate = useNavigate()



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

    };




    useEffect(() => {
        actions.getAllResidentsByStatus(1, "Pendiente");
    }, []);


    return (
        <>
        <nav className="container flex justify-between mt-2">
                    <img src={buenlogo} alt="logo" className="h-20 w-30 mr-10 mt-3"/>
                    <div className="items-center flex gap-x-32">
                        
                        <Link to="/homeadmin">Home</Link>
                        <Link to="/aprobaciones" >Aprobaciones</Link>
                        <Link to="/board">Board</Link>
                        <Link to="/reservaciones">Reservaciones</Link>
                        
                    </div>
                    <div className="relative">
                        <button onClick={toggleDropdown} className="border-solid border-gray-400 border-[1px] p-2 rounded flex justify-start items-center gap-4">
                            Notificaciones
                            <i class="fa-solid fa-angle-down"></i>
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
            <h1 className= "mb-4">Buen vecino</h1>
            <h2 className="text-[#323842FF] text-3xl">Aprobaciones</h2>
        </div>
        <div className="bg-[#D0EBF699] absolute rounded-full inset-y-7 right-7 w-80 h-80"></div>
    </div>
        <div className="container">
            <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                        <div className="overflow-hidden rounded-md">
                            <table className="min-w-full text-left">
                                <thead className="border bg-gray-200 dark:border-neutral-500 font-title">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 ">Unidad ID</th>
                                        <th scope="col" className="px-6 py-4">Nombre</th>
                                        <th scope="col" className="px-6 py-4">Apellido</th>
                                        <th scope="col" className="px-6 py-4">Correo Electronico</th>
                                        <th scope="col" className="px-6 py-4">Apartamento</th>
                                        <th scope="col" className="px-6 py-4">Aprobación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((residente, index)=>{
                                        return(

                                            <tr key={`${residente.id}-${index}`} className="border transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-[#9890D173]">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{residente.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{residente.nombres}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{residente.apellidos}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{residente.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{residente.apartamento_id}</td>
                                            
                                            
                                            <td className="whitespace-nowrap px-6 py-4">
                                            <div className="relative inline-block text-left">
                                                <label htmlFor= {`user_status_${residente.id}`}></label> 
                                                <select id= {`user_status_${residente.id}`} className="rounded-full  px-2 py-2" onChange={(e) => statusUpdate(e.target.value, residente.id)}>
                                                    <option value= "Pendiente">Pendiente</option>
                                                     <option value= "Aprobado">Aprobado</option>
                                                     <option value= "Rechazado">Rechazado</option>
                                                </select>
 
</div>
                                            </td>
                                        </tr>


                                        )
                                    })}
                                    


                                  






                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
        </>
    );
};


export default Aprobaciones_usuario;