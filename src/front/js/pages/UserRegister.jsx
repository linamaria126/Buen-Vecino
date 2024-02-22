import React from "react";

const userRegister = () => {
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
          <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900 fw-bold">
                    Crear Perfil - Residente
                  </h3>
                  <div className="mt-5">
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm">
                      <div className="py-3">
                        <i class="fa-solid fa-circle-info inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Información General
                        </h4>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Número apartamento
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="401"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Torre
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="block text-sm font-medium text-gray-700 px-5 fw-bold">
                            Tipo de residente
                          </p>
                          <div className="flex flex-row">
                            <input
                              type="radio"
                              name="tipo"
                              value="Inquilino"
                              className="pt-4"
                            />
                            <label for="tipo" className="px-2">
                              Inquilino
                            </label>
                          </div>
                          <div fclassName="flex flex-row">
                          <input
                            type="radio"
                            name="tipo"
                            value="Propietario"
                            className="pt-4"
                          />
                          <label for="tipo" className="px-2">
                            Propietario
                          </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Unidad Residencial
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value="Remansos del Lili"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Código de la Unidad Residencial
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value="0245"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i class="fa-solid fa-user inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos del Residente
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nombres
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Nombres"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Apellidos
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Apellidos"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Celular
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="3187549865"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cédula
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="1232584741"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i class="fa-solid fa-car inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos del Vehículo
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Marca
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Marca"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Modelo
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Modelo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Placa
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="placa"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Color
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                        
                      <div className="py-3">
                        <i class="fa-solid fa-dog inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos de la mascota
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Tipo de mascota
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Marca"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Raza
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Modelo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="placa"
                          />
                        </div>
                        
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i class="fa-solid fa-lock inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos de ingreso a la plataforma
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Correo electrónico (se recomienda usar el mismo que emplea para comunicación con su Unidad Residencial)
                          </label>
                          <input
                            type="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="admin_unidad_residencial@unidad.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input
                            type="password"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="********"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Repita su password
                          </label>
                          <input
                            type="password"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="********"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy_policy"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="privacy_policy"
                          className="font-medium text-gray-700"
                        >
                          He leído y aceptado la Política de Privacidad
                        </label>
                        <p className="text-gray-500">
                          Sus datos se almacenarán hasta que elimine su cuenta o
                          ejerza el derecho de borrar sus datos.
                        </p>
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

export default userRegister;
