import React, { useState } from "react";
import Navbar from "../component/navbar.jsx";
import ModalBoard from "../component/ModalBoard.jsx";
import CardBoard from "../component/CardBoard.jsx";


const Board = () => {

  return (
    <>
      <Navbar classname='mb-5' />,
      <ModalBoard />,
      <CardBoard />
    </>
  )
}

export default Board;
