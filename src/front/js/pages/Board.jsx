import React from "react";
import NavbarUser from "../component/NavbarUser.jsx";
import ModalBoard from "../component/ModalBoard.jsx";
import CardBoard from "../component/CardBoard.jsx";

const Board = () => {
  return (
    <>
      <NavbarUser />
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
