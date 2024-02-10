import React from "react";
import  Link  from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
    <a className="navbar-brand" href="#">
        <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
      </a>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Quiénes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Características</a>
          </li>
         
          
        </ul>

          <button className="btn btn-outline-success" type="submit">Iniciar sesión</button>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar;


