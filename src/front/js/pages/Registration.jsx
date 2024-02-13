import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Registration = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container pt-5 w-auto p-10 m-10 bg-gray-50">
      <div className="min-h-screen flex flex-col">
        <header className="bg-[#F3F4F6FF] shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                    LOGO
                </h1>
            </div>
        </header>
        <main className="flex-grow">
            <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-xl leading-6 font-medium text-gray-900 fw-bold">
                                Crear Perfil - Unidad Residencial
                            </h3>
                            <div className="mt-5">
                                <div className="rounded-md bg-[#F3F4F6FF] p-6 shadow-sm">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Nombre Unidad Residencial</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Unidad Res. Remansos del Lili"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Nit</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="900.232.500.120"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Dirección</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Cra 102 # 34-133"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="602-400-502-600"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Cantidad de apartamentos o Casas</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="200"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Cantidad de Torres</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="6"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md bg-[#F3F4F6FF] p-6 shadow-sm mt-4">
                                    <h4 className="text-sm font-medium text-gray-900">Datos Representante legal</h4>
                                    <div className="grid grid-cols-2 gap-6 mt-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Nombres</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Nombres"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Apellidos"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Celular</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="3187549865"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Cédula</label>
                                            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="1232584741"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md bg-[#F3F4F6FF] p-6 shadow-sm mt-4">
                                    <h4 className="text-sm font-medium text-gray-900">Datos de ingreso a la plataforma</h4>
                                    <div className="grid grid-cols-2 gap-6 mt-4">
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Correo electrónico (que usa como administrador de la Unidad Residencial)</label>
                                            <input type="email"  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="admin_unidad_residencial@unidad.com"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Password</label>
                                            <input type="password"  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="********"/>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Repita su password</label>
                                            <input type="password" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="********"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start mt-4">
                                    <div className="flex items-center h-5">
                                        <input id="privacy_policy" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="privacy_policy" className="font-medium text-gray-700">He leído y aceptado la Política de Privacidad</label>
                                        <p className="text-gray-500">Sus datos se almacenarán hasta que elimine su cuenta o ejerza el derecho de borrar sus datos.</p>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button className="bg-[#F3F4F6FF] py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cancel
                                    </button>
                                    <button className="ml-3 bg-[#796FC3FF] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#665BBAFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
      
    </div>
  );
};
