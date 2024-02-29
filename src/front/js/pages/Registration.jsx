import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../../styles/index.css';
import Banner from '../component/banner.jsx';
import { Context } from "../store/appContext";

export const Registration = () => {
  const navigate = useNavigate();
  const [newUnitUser, setNewUnitUser] = useState({
    nombre_unidad : "",
    nit : "",
    direccion : "",
    telefono : "",
    cant_apto : "",
    cant_torres: "",
    nombres_admin : "",
    apellidos: "",
    celular : "",
    cedula : "",
    email: "",
    password: "",
  });

  const handleChange = (e)=> {
    setNewUnitUser({ ...newUnitUser, [e.target.name]: e.target.value });
    console.log(newUnitUser)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addUnit(newUnitUser);
    handleOpenModalSubmit();
    
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
      <div className="min-h-screen flex flex-col">
        <div>
          <Banner />
        </div>
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900 fw-bold">
                    Crear Perfil - Unidad Residencial
                  </h3>
                  <div className="mt-5">
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm">
                      <div className="py-3">
                        <i className="fa-solid fa-circle-info inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Información General
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nombre Unidad Residencial
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Unidad Res. Remansos del Lili"
                            name="nombre_unidad"
                            onChange={handleChange}
                            value={newUnitUser.nombre_unidad}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nit
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="900.232.500.120"
                            name="nit"
                            onChange={handleChange}
                            value={newUnitUser.nit}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Dirección
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Cra 102 # 34-133"
                            name="direccion"
                            onChange={handleChange}
                            value={newUnitUser.direccion}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Teléfono
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="602-400-502-600"
                            name="telefono"
                            onChange={handleChange}
                            value={newUnitUser.telefono}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cantidad de apartamentos o Casas
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="200"
                            name="cant_apto"
                            onChange={handleChange}
                            value={newUnitUser.cant_apto}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cantidad de Torres
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="6"
                            name="cant_torres"
                            onChange={handleChange}
                            value={newUnitUser.cant_torres}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md bg-[#DEE1E6FF] p-6 shadow-sm mt-4">
                      <div className="py-3">
                        <i className="fa-solid fa-user inline text-lg pr-3"></i>
                        <h4 className="inline fw-bold text-lg">
                          Datos representante legal
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
                            name="nombres_admin"
                            onChange={handleChange}
                            value={newUnitUser.nombres_admin}
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
                            value={newUnitUser.apellidos}
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
                            value={newUnitUser.celular}
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
                            value={newUnitUser.cedula}
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
                            Correo electrónico (que usa como administrador de la
                            Unidad Residencial)
                          </label>
                          <input
                            type="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F3F4F6FF] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="admin_unidad_residencial@unidad.com"
                            name="email"
                            onChange={handleChange}
                            value={newUnitUser.email}
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
                            value={newUnitUser.password}
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
                            value={newUnitUser.password}
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
                          htmlFor="privacy_policy"
                          className="font-medium text-gray-700"
                          onClick={handleOpenModal}
                          style={{ cursor: 'pointer' }}
                        >
                          He leído y aceptado la
                          <span className="text-[#5549AFFF] font-bold"> Política de Privacidad</span>
                        </label>
                        <p className="text-gray-500">
                          Sus datos se almacenarán hasta que elimine su cuenta o
                          ejerza el derecho de borrar sus datos.
                        </p>

                        {modalOpen && (<div className="fixed inset-0 opacity-90 backdrop-blur-xl backdrop-contrast-50 bg-white/30 flex justify-center items-center">
                          <div className="bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                            <div className="text-4xl font-title font-bold mb-2 py-3 px-5 bg-slate-200">
                              <h1 className="text-black">Politica de Tratamiento de datos - Unidad Residencial</h1>
                            </div>
                            <div className="px-5 text-black relative z-10">
                              <i className="fas fa-circle text-[#9890D173] text-8xl absolute right-5 top-5"> </i>

                              <p className="mb-3 pt-2 z-10">


                                Nuestra empresa reconoce la importancia de proteger la privacidad y los datos personales de nuestros clientes, empleados y otros usuarios de nuestros servicios. Esta política establece cómo recopilamos, utilizamos, divulgamos, almacenamos y protegemos los datos personales de acuerdo con las leyes y regulaciones de privacidad aplicables.</p>
                              <ol>
                                <p className="mb-3 z-10"> <li>
                                  <h5>1. Recopilación de Datos Personales</h5>
                                  <div className='mt-2'>

                                    Recopilamos datos personales de manera justa y legal, y solo con el consentimiento del individuo cuando sea necesario.
                                    Los datos personales recopilados se limitan al mínimo necesario para los fines comerciales legítimos de nuestra empresa.
                                    Informaremos a los individuos sobre la finalidad de la recopilación de sus datos personales y obtendremos su consentimiento explícito cuando sea necesario.
                                    <i className="fas fa-circle text-[#9890D173] text-8xl absolute right-15"> </i>
                                  </div>
                                </li></p>
                                <p className="mb-3 z-10">
                                  <li>
                                    <h5>2. Uso y Divulgación de Datos Personales</h5>
                                    <div className='mt-2'>

                                      Utilizamos datos personales únicamente para los fines para los que fueron recopilados, a menos que obtengamos el consentimiento del individuo para otro uso.
                                      No compartimos, vendemos ni divulgamos datos personales a terceros sin el consentimiento del individuo, excepto cuando sea requerido por ley u orden judicial.
                                    </div></li></p>
                                <p className="mb-3"><li>
                                  <h5>3. Almacenamiento y Seguridad de Datos Personales</h5>
                                  <div className='mt-2'>
                                    Almacenamos datos personales de forma segura y protegida, utilizando medidas de seguridad físicas, técnicas y administrativas adecuadas para prevenir el acceso no autorizado, la divulgación, el uso indebido, la modificación o la destrucción de los datos.
                                    Mantenemos los datos personales precisos, completos y actualizados según sea necesario para los fines para los que fueron recopilados.
                                  </div></li></p>

                                <p className="mb-3"><li>
                                  <h5>4. Derechos de los Individuos</h5>
                                  <div className='mt-2'>
                                    Respetamos los derechos de los individuos en relación con sus datos personales, incluido el derecho de acceso, rectificación, eliminación y restricción de procesamiento.
                                    Proporcionaremos a los individuos la oportunidad de ejercer sus derechos y responderemos a las solicitudes en tiempo hábil de acuerdo con la ley aplicable.
                                  </div></li></p>
                                <p className="mb-3 z-10"><li>
                                  <h5>5. Responsabilidad y Cumplimiento</h5>
                                  <div className='mt-2'>
                                    Todos los empleados de nuestra empresa están capacitados y son responsables de cumplir con esta política y las leyes de privacidad aplicables.
                                    Mantenemos registros de nuestras prácticas de tratamiento de datos personales y revisamos y actualizamos esta política periódicamente para garantizar su efectividad y conformidad con las leyes y regulaciones de privacidad.
                                  </div></li></p>

                                <p className="mb-3 z-10"><li>
                                  <h5 className="z-5">6. Contacto</h5>
                                  <div className='mt-2'>
                                    Para cualquier pregunta, inquietud o solicitud relacionada con esta política o el tratamiento de datos personales, comuníquese con nuestro Oficial de Privacidad designado.a aprobación.
                                  </div></li></p>
                              </ol>


                              <i className="fas fa-circle text-[#9890D173] text-8xl absolute translate-x-1/2 -translate-y-72"> </i>
                              <i className="fas fa-circle text-[#9890D173] text-8xl absolute translate-x-72 -translate-y-48"> </i>



                              <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={handleCloseModal} data-modal-hide="default-modal" type="button" className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white">Aceptar</button>
                                <button onClick={handleDecline} data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-[#5549AFFF] rounded-lg border border-gray-200 hover:bg-[#665BBAFF] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#5549AFFF] dark:focus:ring-[#5549AFFF] dark:bg-[#5549AFFF] dark:text-white">Rechazar</button>
                              </div>

                            </div>
                          </div >
                        </div>)}


                        {showDeclineMessage && (
                          <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg border border-gray-200 shadow-md">
                              <div className="flex justify-between items-center bg-[#9890D1FF]">
                                <h5 className="mx-3 my-2">Notificación</h5>
                                <button onClick={() => setShowDeclineMessage(false)} className="text-sm text-gray-500 mt-2 hover:text-gray-700 focus:outline-none"><i className="fa-solid fa-xmark mx-3 "></i></button>
                              </div>
                              <div>
                                <p className="text-black font-old font-body mx-3 my-2">Lo sentimos, para formar parte de la plataforma, es necesario aceptar nuestra política de privacidad.</p>

                              </div>


                            </div>
                          </div>
                        )}





                      </div>
                    </div>
                    <div className="flex justify-end mt-6">
                      <button className="bg-[#F3F4F6FF] py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Cancel
                      </button>
                      <button onClick={handleSubmit} className="ml-3 bg-[#796FC3FF] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#665BBAFF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                        {modalOpenSubmit && (

                          <div className="fixed inset-0 bg-black opacity-80 backdrop-blur-sm">
                            <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                              <div className="grid grid-cols-2 ">
                                <div className="col-span-2 bg-slate-200">
                                  <h5 className="mx-4 my-2 font-title font-bold text-black text-left text-xl">Tu Unidad Residencial ha sido creada 🚀</h5></div>

                                <div className="bg-[#5549AF38] flex text left items-center relative ">
                                  <h3 className="font-body text-black text-4xl mx-4 pl-10">Felicitaciones! 🎉</h3>
                                  <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 "> </i>
                                  <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5"> </i></div>

                                <div className="bg-white mx-5 text-left">
                                  <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>


                                  <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">Información recibida</h5>
                                  <p className='font-body text-black mb-3 text-lg'>
                                  Acabas de recibir un correo electrónico  ✉️ con el link 🔗 que puedes enviar a los residentes de tu Unidad Residencial!!!
                                  </p>
                                  <p className="font-body text-slate-700">
                                    Ya puedes empezar a comunicarle a toda la comunidad para que creen sus perfiles y empiecen a interactuar 🚀
                                  </p>
                                  <div className="flex items-center justify-end mt-5 mb-5 ">
                                    <button onClick={handleCloseModalSubmit} data-modal-hide="default-modal" type="button" className="text-white bg-[#5549AFFF] hover:bg-[#665BBAFF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#5549AFFF] dark:hover:bg-[#5549AFFF] dark:focus:ring-[#5549AFFF]  dark:text-white">
                                      Salir</button>
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
      </div>
    </div>
  );
};

export default Registration;
