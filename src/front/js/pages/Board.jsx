import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import NavbarUser from "../component/NavbarUser.jsx";
import NavbarAdmin from "../component/NavbarAdmin.jsx";
import ModalBoard from "../component/ModalBoard.jsx";
import CardBoard from "../component/CardBoard.jsx";


const Board = () => {
  const { store, actions } = useContext(Context);
  const [userType, setUserType ] = useState(store.user.tipo);
  return (
    <>
    
      <div>
        {userType === 'administrador' ? <NavbarAdmin /> : <NavbarUser />}
      </div>
    
      
      <div className="bg-[#DEE1E6FF] pt-10 pb-5 ">
        <div className="flex justify-center flex-row pt-10 text-5xl text-gray-500">
          <i className="fa-solid fa-chalkboard"></i>
          <h1 className="font-bold px-3">Board de negocios</h1>
        </div>

        <ModalBoard />
        <CardBoard />
        
      </div>
    </>
  );
};

export default Board;
