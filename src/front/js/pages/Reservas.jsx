import React, { useContext, useState } from "react";

import Navbar from "../component/navbar.jsx";
import ModalReserva from "../component/ModalReserva.jsx";
import { Context } from "../store/appContext.js";

const Reservas = () => {
  const today = new Date().toISOString().slice(0, 16);
  const [inputValue, setInputvalue] = useState({
    fecha: null,
    personas: "",
    descripcion: ""
  });
  const { store, actions } = useContext(Context);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue)
    actions.addReservacion(inputValue);
    
    //escribo mensaje del modal
  };
  const handlechange = (event) => {
    setInputvalue({...inputValue, [event.target.name]: event.target.value})
    console.log(event.target.value)
  }

  return (
    <>
      <Navbar />,
      <div className="bg">
        <div className="container flex ">
          <form onSubmit={onSubmit} className="flex-1 border p-3">
            <div className="font-bold my-3">Reservaciones</div>
            <ul className="mb-3">
              <li className="indent-3">
                Selecione a continuacion el espacio que desea reservar
              </li>
            </ul>
            <div className="flex my-4">
              <div className="flex flex-1 flex-col">
                <label For="#personas">Numero de personas</label>
                <input
                  type="text"
                  className="border-2 border-black rounded w-1/4"
                  onChange={handlechange}
                  name="personas"
                />
                <label htmlFor="">Fecha y hora</label>
                <div>
                  <div>
                    <input
                      type="datetime-local"
                      min={today}
                      onChange={handlechange}
                      name="fecha"
                      
                      required
                      className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex flex-1 flex-col">
                <label htmlFor="">Ocasion para la reserva</label>
                <textarea
                  name="descripcion"
                  className="border-2 border-black h-24 rounded"
                  onChange={handlechange}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#796FC3FF] mt-3 hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded"
                type="submit" onClick={onSubmit}
              >
                reservar
              </button>
            </div>
          </form>
          <div className="flex-1 border p-3">imagen</div>
        </div>
      </div>
    </>
  );
};

export default Reservas;
