import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardBoard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mb-20">
        
      <div>
        {store.publicaciones.map((publicacion) => {
          return (
            <div key={publicacion.id} className="flex items-start mb-10 pt-4 pb-1 px-4 bg-white rounded-xl">
              <img
                src="https://picsum.photos/40"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                
                <p className="font-semibold">Carmen Martinez</p>
                <p className="text-gray-700">{publicacion.contenido}
                </p>
                <p className="text-gray-500 text-xs mt-2 pt-3 pb-2">{publicacion.creacion}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default CardBoard;
