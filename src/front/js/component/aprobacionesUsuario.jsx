import React, { useState, useContext } from 'react';
import '../../styles/index.css';
import {Context} from '../store/appContext.js';
import Pagination from './pagination.jsx';




const Aprobaciones_usuario = () => {
    const {store, actions } = useContext(Context);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5

    const totalItems = allResidents.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAllResidents = allResidents.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

    };


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
                                    {store.currentAllResidents.map((residente)=>{
                                        return(

                                            <tr key={allResidents.id} className="border transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-[#9890D173]">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.nombre}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.apellido}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.correo}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.apartamento}</td>
                                            <td className="whitespace-nowrap px-6 py-4">


                                            </td>
                                        </tr>


                                        )
                                    })}
                                    

                                    <div class="relative inline-block text-left">
                                        <div>
                                            <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="options-menu" aria-expanded="true" aria-haspopup="true">

                                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="false">
                                                    <path fill-rule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>


                                        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div class="py-1" role="none">

                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Aprovado</a>
                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Rechazado</a>
                                            </div>
                                        </div>
                                    </div>






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