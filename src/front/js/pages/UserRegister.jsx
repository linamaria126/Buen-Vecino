import React, { useState,  useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Banner from '../component/banner.jsx';

const userRegister = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  if (params.uniId == undefined )
    uniId = 1

  const [newUser, setNewUser] = useState({
    torre: "",
    num_apto: "",
    tipo: "",
    nombres: "",
    apellidos: "",
    celular: "",
    cedula: "",
    marca_vehiculo: "",
    modelo_vehiculo: "",
    placa_vehiculo: "",
    color_vehiculo: "",
    pet_tipo: "",
    raza: "",
    pet_nombre: "",
    email: "",
    password: "", 
    unidad_residencial_id: params.uniId,
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await actions.addUser(newUser);
    console.log(response);
    if(response){
      handleOpenModalSubmit();
    }
  
  };

  const { store, actions } = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);
  const [showDeclineMessage, setShowDeclineMessage] = useState(false);
  const [modalOpenSubmit, setModalOpenSubmit] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setShowDeclineMessage(false);
  };

  const handleDecline = () => {
    setShowDeclineMessage(true);
  };

  const handleOpenModalSubmit = () => {
    setModalOpenSubmit(true);
  };

  const handleCloseModalSubmit = () => {
    setModalOpenSubmit(false);
    navigate("/");
  };

  return (
    <div className="w-auto bg-gray-50">
      <form className="min-h-screen flex flex-col">
        <div>
          <Banner />
        </div>
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
                        <i className="fa-solid fa-circle-info inline text-lg pr-3"></i>
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
                            name="num_apto"
                            onChange={handleChange}
                            value={newUser.num_apto}
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
                            name="torre"
                            onChange={handleChange}
                            value={newUser.torre}
                          />
                        </div>
                        <div className="flex flex-col pl-10">
                          <p className="block text-lg font-medium text-gray-700 px-5 fw-bold">
                            Tipo de residente
                          </p>
                          <div className="flex flex-row">
                            <input
                              type="radio"
                              name="tipo"
                              value="inquilino"
                              className="pt-4"
                              onChange={handleChange}
                              
                            />
                            <label for="tipo" className="px-2 pt-2">
                              Inquilino
                            </label>
                          </div>
                          <div className="flex flex-row">
                            <input
                              type="radio"
                              name="tipo"
                              value="propietario"
                              className="pt-4"
                              onChange={handleChange}
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
                            value="Capriani"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Código de la Unidad Residencial
                          </label>
                          <input
                            type="number"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={newUser.unidad_residencial_id}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i className="fa-solid fa-user inline text-lg pr-3"></i>
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
                            name="nombres"
                            onChange={handleChange}
                            value={newUser.nombres}
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
                            name="apellidos"
                            onChange={handleChange}
                            value={newUser.apellidos}

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
                            name="celular"
                            onChange={handleChange}
                            value={newUser.celular}
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
                            name="cedula"
                            onChange={handleChange}
                            value={newUser.cedula}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i className="fa-solid fa-lock inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos de ingreso a la plataforma
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Correo electrónico (se recomienda usar el mismo que
                            emplea para comunicación con su Unidad Residencial)
                          </label>
                          <input
                            type="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="correopersonal@email.com"
                            name="email"
                            onChange={handleChange}
                            value={newUser.email}
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
                            name="password"
                            onChange={handleChange}
                            value={newUser.password}
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
                            name="password"
                            onChange={handleChange}
                            value={newUser.password}
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
                          onClick={handleOpenModal}
                          style={{ cursor: "pointer" }}
                        >
                          He leído y aceptado la{" "}
                          <span className="text-[#5549AFFF] font-bold">
                            {" "}
                            Política de Privacidad
                          </span>{" "}
                          
                        </label>
                        <p className="text-gray-500">
                          Sus datos se almacenarán hasta que elimine su cuenta o
                          ejerza el derecho de borrar sus datos.
                        </p>
                        {modalOpen && (
                          <div className="fixed inset-0 opacity-90 backdrop-blur-xl backdrop-contrast-50 bg-white/30 flex justify-center items-center">
                            <div className="bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">
                              <div className="text-4xl font-title font-bold mb-2 py-3 px-5 bg-slate-200">
                                <h1 className="text-black">
                                  Politica de Datos Personales - Residente
                                </h1>
                              </div>
                              <div className="px-5 text-black relative z-10">
                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute right-5 top-5">
                                  {" "}
                                </i>

                                <p className="mb-3 pt-2 z-10">
                                  Nuestra empresa reconoce la importancia de
                                  proteger la privacidad y los datos personales
                                  de nuestros clientes, empleados y otros
                                  usuarios de nuestros servicios. Esta política
                                  establece cómo recopilamos, utilizamos,
                                  divulgamos, almacenamos y protegemos los datos
                                  personales de acuerdo con las leyes y
                                  regulaciones de privacidad aplicables.
                                </p>
                                <ol>
                                  <p className="mb-3 z-10">
                                    {" "}
                                    <li>
                                      <h5>
                                        1. Recopilación de Datos Personales
                                      </h5>
                                      <div className="mt-2">
                                        Recopilamos datos personales de manera
                                        justa y legal, y solo con el
                                        consentimiento del individuo cuando sea
                                        necesario. Los datos personales
                                        recopilados se limitan al mínimo
                                        necesario para los fines comerciales
                                        legítimos de nuestra empresa.
                                        Informaremos a los individuos sobre la
                                        finalidad de la recopilación de sus
                                        datos personales y obtendremos su
                                        consentimiento explícito cuando sea
                                        necesario.
                                        <i className="fas fa-circle text-[#9890D173] text-8xl absolute right-15">
                                          {" "}
                                        </i>
                                      </div>
                                    </li>
                                  </p>
                                  <p className="mb-3 z-10">
                                    <li>
                                      <h5>
                                        2. Uso y Divulgación de Datos Personales
                                      </h5>
                                      <div className="mt-2">
                                        Utilizamos datos personales únicamente
                                        para los fines para los que fueron
                                        recopilados, a menos que obtengamos el
                                        consentimiento del individuo para otro
                                        uso. No compartimos, vendemos ni
                                        divulgamos datos personales a terceros
                                        sin el consentimiento del individuo,
                                        excepto cuando sea requerido por ley u
                                        orden judicial.
                                      </div>
                                    </li>
                                  </p>
                                  <p className="mb-3">
                                    <li>
                                      <h5>
                                        3. Almacenamiento y Seguridad de Datos
                                        Personales
                                      </h5>
                                      <div className="mt-2">
                                        Almacenamos datos personales de forma
                                        segura y protegida, utilizando medidas
                                        de seguridad físicas, técnicas y
                                        administrativas adecuadas para prevenir
                                        el acceso no autorizado, la divulgación,
                                        el uso indebido, la modificación o la
                                        destrucción de los datos. Mantenemos los
                                        datos personales precisos, completos y
                                        actualizados según sea necesario para
                                        los fines para los que fueron
                                        recopilados.
                                      </div>
                                    </li>
                                  </p>

                                  <p className="mb-3">
                                    <li>
                                      <h5>4. Derechos de los Individuos</h5>
                                      <div className="mt-2">
                                        Respetamos los derechos de los
                                        individuos en relación con sus datos
                                        personales, incluido el derecho de
                                        acceso, rectificación, eliminación y
                                        restricción de procesamiento.
                                        Proporcionaremos a los individuos la
                                        oportunidad de ejercer sus derechos y
                                        responderemos a las solicitudes en
                                        tiempo hábil de acuerdo con la ley
                                        aplicable.
                                      </div>
                                    </li>
                                  </p>
                                  <p className="mb-3 z-10">
                                    <li>
                                      <h5>5. Responsabilidad y Cumplimiento</h5>
                                      <div className="mt-2">
                                        Todos los empleados de nuestra empresa
                                        están capacitados y son responsables de
                                        cumplir con esta política y las leyes de
                                        privacidad aplicables. Mantenemos
                                        registros de nuestras prácticas de
                                        tratamiento de datos personales y
                                        revisamos y actualizamos esta política
                                        periódicamente para garantizar su
                                        efectividad y conformidad con las leyes
                                        y regulaciones de privacidad.
                                      </div>
                                    </li>
                                  </p>

                                  <p className="mb-3 z-10">
                                    <li>
                                      <h5 className="z-5">6. Contacto</h5>
                                      <div className="mt-2">
                                        Para cualquier pregunta, inquietud o
                                        solicitud relacionada con esta política
                                        o el tratamiento de datos personales,
                                        comuníquese con nuestro Oficial de
                                        Privacidad designado.a aprobación.
                                      </div>
                                    </li>
                                  </p>
                                </ol>

                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute translate-x-1/2 -translate-y-72">
                                  {" "}
                                </i>
                                <i className="fas fa-circle text-[#9890D173] text-8xl absolute translate-x-72 -translate-y-48">
                                  {" "}
                                </i>

                                <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                  <button
                                    onClick={handleCloseModal}
                                    data-modal-hide="default-modal"
                                    type="button"
                                    className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white"
                                  >
                                    Aceptar
                                  </button>
                                  <button
                                    onClick={handleDecline}
                                    data-modal-hide="default-modal"
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-[#5549AFFF] rounded-lg border border-gray-200 hover:bg-[#665BBAFF] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#5549AFFF] dark:focus:ring-[#5549AFFF] dark:bg-[#5549AFFF] dark:text-white"
                                  >
                                    Rechazar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i className="fa-solid fa-car inline text-lg pr-3"></i>
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
                            name="marca_vehiculo"
                            onChange={handleChange}
                            value={newUser.marca_vehiculo}
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
                            name="modelo_vehiculo"
                            onChange={handleChange}
                            value={newUser.modelo_vehiculo}
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
                            name="placa_vehiculo"
                            onChange={handleChange}
                            value={newUser.placa_vehiculo}
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
                            name="color_vehiculo"
                            onChange={handleChange}
                            value={newUser.color_vehiculo}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i className="fa-solid fa-dog inline text-lg pr-3"></i>
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
                            placeholder="Gato"
                            name="pet_tipo"
                            onChange={handleChange}
                            value={newUser.pet_tipo}
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
                            name="raza"
                            onChange={handleChange}
                            value={newUser.raza}
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
                            name="pet_nombre"
                            onChange={handleChange}
                            value={newUser.pet_nombre}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-6">
                      <button className="bg-[#F3F4F6FF] py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}className="ml-3 bg-[#796FC3FF] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#665BBAFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit
                        {modalOpenSubmit && (
                          <div className="fixed inset-0 bg-black opacity-80 backdrop-blur-sm">
                            <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">
                              <div className="grid grid-cols-2 ">
                                <div className="col-span-2 bg-slate-200">
                                  <h5 className="mx-4 my-2 font-title font-bold text-black text-left text-xl">
                                    Tu suscripción está en proceso
                                  </h5>
                                </div>

                                <div className="bg-[#5549AF38] flex text left items-center relative ">
                                  <h3 className="font-body text-black text-4xl mx-4 pl-10">
                                  Felicitaciones! 🎉
                                  </h3>
                                  <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 "></i>
                                  <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5">
                                  </i>
                                </div>

                                <div className="bg-white mx-5 text-left">
                                  <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>

                                  <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">
                                    Información recibida
                                  </h5>
                                  
                                  <p className="font-body text-black text-lg">
                                    En este momento tu perfil está siendo
                                    estudiado. Te enviaremos un correo de confirmación cuando tu
                                    aprobación esté lista. 👍🏻
                                  </p>
                                  <div className="flex items-center justify-end mt-5 mb-5 ">
                                    <button
                                      onClick={handleCloseModalSubmit}
                                      data-modal-hide="default-modal"
                                      type="button"
                                      className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white"
                                    >
                                      Salir
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};

export default userRegister;
