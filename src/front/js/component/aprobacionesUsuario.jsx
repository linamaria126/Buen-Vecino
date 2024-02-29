import React, { useState, useContext , useEffect } from 'react';
import '../../styles/index.css';
import {Context} from '../store/appContext.js';
import Pagination from './pagination.jsx';




const Aprobaciones_usuario = () => {
    const {store, actions } = useContext(Context);
    const [selectedStatus, setSelectedStatus] = useState("Pendiente");



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5

    const totalItems = store.users.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = store.users.slice(indexOfFirstItem, indexOfLastItem);

    const statusUpdate = async(value, residentId) =>{
        const is_active= value === "Aprobado" ? true : false;
        const response = await actions.putUpdatedStatus(residentId, value)
        if(response) {actions.getAllResidentsByStatus(1, "Pendiente")} 
    }




    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

    };


    


    useEffect(() => {
        actions.getAllResidentsByStatus(1, "Pendiente");
    }, []);


    return (
        <div className="container">
            <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                        <div className="overflow-hidden rounded-md">
                            <table className="min-w-full text-left text-sm">
                                <thead className="border bg-gray-200 dark:border-neutral-500">
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
                                    {currentUsers.map((residente)=>{
                                        return(

                                            <tr key={store.users.id} className="border transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-[#9890D173]">
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

kkm              km                                    j 
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
    );
};


export default Aprobaciones_usuario;