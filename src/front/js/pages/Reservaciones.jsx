import React from "react";
import Navbar from "../component/navbar.jsx";

const Reservaciones = () => {
  return (
    <>
      <Navbar />,
      <div className="bg">
        <div className="container flex ">
          <div className="flex-1 border p-3">
            <div className="font-bold my-3">Reservaciones</div>
            <ul className="mb-3">
              <li className="indent-3">
                Selecione acontinuacion el espacio que desea reservar
              </li>
              <li className="indent-3">segundo comentario </li>
            </ul>
            <div className="flex my-4">
              <div className="flex-1 ">
                <label htmlFor="">Numero de personas</label>
                <input
                  type="text"
                  className="border-2 border-black rounded-sm"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="">Lugar de reserva</label>
                <select name="reservacion" className="border-2 border-black">
                  <option value="piscina">Piscina</option>
                  <option value="salon_evento">Salon de eventos</option>
                  <option value="cancha">Cancha</option>
                </select>
              </div>
            </div>
            <div>otro date</div>
          </div>
          <div className="flex-1 border p-3">imagen</div>
        </div>
      </div>
    </>
  );
};

export default Reservaciones;
