import React, { useContext, useState, useEffect } from "react";
import ModalReserva from "../component/ModalReserva.jsx";
import { Context } from "../store/appContext.js";
import reservas from "../../img/reservas.jpg";
import NavbarUser from "../component/NavbarUser.jsx";
import NavbarAdmin from "../component/NavbarAdmin.jsx";

const Reservas = () => {
  const today = new Date().toISOString().slice(0, 16);
  const [modalOpenReservation, setModalOpenReservation] = useState(false);
  const [inputValue, setInputvalue] = useState({
    inicio: null,
    personas: "",
    descripcion: "",
  });
  const { store, actions } = useContext(Context);
  const [userType, setUserType ] = useState(store.user.tipo);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    actions.addReservacion(inputValue);
    setModalOpenReservation(true);
    //escribo mensaje del modal
  };
  const handlechange = (event) => {
    setInputvalue({ ...inputValue, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const handleOpenModalReservation = () => {
    setModalOpenReservation(true);
  };
  const handleCloseModalReservation = () => {
    setModalOpenReservation(false);
    setInputvalue({
      inicio: "",
      personas: "",
      descripcion: "",
    });
  };
  return (
    <>
      <div>
        {userType === "administrador" ? <NavbarAdmin /> : <NavbarUser />}
      </div>
      <div>
        <div className="container flex pt-10">
          <form
            onSubmit={onSubmit}
            className="flex-1 border-2 rounded-md border-slate-300 p-3"
          >
            <div className="font-title my-3 text-4xl text-[#796FC3FF]">
              Reservaciones <span className="text-2xl">&#127881;</span>{" "}
              <span className="text-2xl">&#128197;</span>
            </div>
            <ul className="mb-3 font-body">
              <li className="indent">
                ¡Hola residente!
                <p className="pt-2">
                  Para reservar nuestro salón de fiestas, necesitamos algunos
                  detalles
                </p>
              </li>
            </ul>
            <div className="flex my-4">
              <div className="flex flex-1 flex-col">
                <label For="#personas" className="text-[#796FC3FF] font-bold">
                  Número de personas
                </label>
                <input
                  type="text"
                  className="border-2 border-slate-300 rounded w-1/4 px-2 py-1"
                  onChange={handlechange}
                  name="personas"
                />
                <label htmlFor="" className="pt-3 text-[#796FC3FF] font-bold">
                  Fecha y Hora
                </label>
                <div>
                  <div>
                    <input
                      type="datetime-local"
                      min={today}
                      onChange={handlechange}
                      name="fecha"
                      required
                      className="border-2 border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex flex-1 flex-col px-5">
                <label htmlFor="" className="text-[#796FC3FF] font-bold">
                  Ocasión para la reserva
                </label>
                <textarea
                  name="descripcion"
                  className="border-2 border-slate-300 h-24 rounded px-2 py-1"
                  onChange={handlechange}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#796FC3FF] mt-3 hover:bg-custom-color-dark text-white py-2 px-4 rounded"
                type="submit"
                onClick={handleOpenModalReservation}
              >
                Reservar
              </button>
            </div>
            {modalOpenReservation && (
              <div className="fixed inset-0 bg-black opacity-90 backdrop-blur-sm flex justify-center items-center">
                <div className=" container bg-white p-0 rounded w-full max-w-[90%] max-h-[80vh] overflow-auto">
                  <div className="grid grid-cols-2 ">
                    <div className="col-span-2 bg-slate-200">
                      <h5 className="mx-3 my-2 font-title font-bold text-xl">
                        Gracias por tu reservación{" "}
                        <span className="text-2xl">&#127881;</span>
                      </h5>
                    </div>
                    <div className="bg-[#5549AF38] flex justify-center items-center relative ">
                      <h3 className="font-body text-black text-xl mx-5">
                        <p>
                          <b>Detalles de tu Reserva</b>
                        </p>
                        <p>
                          <b>Reserva:</b> Salon Social
                        </p>
                        <p>
                          <b>Fecha y Hora:</b> {inputValue.fecha}
                        </p>
                        <p>
                          <b>Numero de Personas:</b> {inputValue.personas}
                        </p>
                        <p>
                          <b>Ocasión:</b> {inputValue.descripcion}
                        </p>
                      </h3>
                      <i className="fa-solid fa-caret-up text-[#D0EBF6FF] text-9xl absolute bottom-8 right-0 ">
                        {" "}
                      </i>
                      <i className="fas fa-circle text-[#9890D173] text-8xl absolute top-9 right-5">
                        {" "}
                      </i>
                    </div>
                    <div className="bg-white mx-5">
                      <i className="fa-solid fa-circle-check text-[#796FC3FF] text-6xl mt-5"></i>
                      <h5 className="font-bold text-[#379AE6FF] font-body mt-2 mb-5">
                        Información recibida
                      </h5>
                      <p className="font-body text-black mb-3">
                        ¡Gracias por elegir nuestra unidad residencial para tu
                        evento!
                      </p>
                      <p className="font-body text-black">
                        Esperamos poder hacer de este día un momento especial
                        para ti y tus invitados.
                      </p>
                      <div className="flex items-center justify-end mt-5 mb-5 ">
                        <button
                          onClick={handleCloseModalReservation}
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
          </form>
          <div className="flex border ">
            <img src={reservas} alt="photo space" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Reservas;
