import React from 'react'
import '../../styles/index.css';
import { useState } from "react";





const modaltermconditions = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [showDeclineMessage, setShowDeclineMessage] = useState(false);


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

    return (
        <>
            <button onClick={handleOpenModal} className='bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5'>
                Open modal
            </button>
            {modalOpen && (<div className="fixed inset-0 bg-black opacity-60 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">

                    <div className="text-4xl font-title font-bold mb-2 py-3 px-5 bg-slate-200">
                        <h1 className="text-black">Politica de Datos Personales</h1>
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

        </>
    )
}

export default modaltermconditions
