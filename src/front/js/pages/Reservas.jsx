import React, {useContext} from "react";
import Navbar from "../component/navbar.jsx";
import DateTime from "../component/DateTime.jsx";
import {Context} from '../store/appContext.js'

const Reservaciones = () => {
  const {store, actions} = useContext(Context)
  const onSubmit = async (event)=> {
    event.preventDefault()
    actions.addReservaciones(event)
    //aqui activar el modal (para dateTime) useState(True para el modal)
    //escribo mensaje del modal 

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
                  name="#personas"
                />
                <label htmlFor="">Fecha y hora</label>
              <DateTime />
              </div>
              <div className=" flex flex-1 flex-col">
                <label htmlFor="">Ocasion para la reserva</label>
                <textarea name="reservacion" className="border-2 border-black h-24 rounded">
                </textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#796FC3FF] mt-3 hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded" type="submit">
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

export default Reservaciones;
