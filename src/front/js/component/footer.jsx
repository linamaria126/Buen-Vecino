import React from 'react';
import logo from '../../img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <div className="py-2">
            <img src={logo} alt="logo" className="h-10 w-30" />

          </div>
          <nav className="mb-4">
            <a href="#" className="px-2">Sobre Nosotros</a>
            <a href="#" className="px-2">Características</a>
            <a href="#" className="px-2">Contactanos</a>
            <a href="#" className="px-2">Preguntas Frequentes</a>
          </nav>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>Ingles</option>
            <option>Español</option>
          </select>
          <p className="text-xs mt-4">&copy; 2024 Brand, Inc. - Privacy - Terms - Sitemap</p>
        </div>
        <div className="text-sm">
          <h3 className="font-bold mb-2">Suscríbete a nuestro boletín</h3>
          <div className="flex">
            <input type="email" placeholder="Ingresa tu correo electrónico" className="border border-gray-300 rounded-l px-4 py-2 w-full" />
            <button className="bg-[#9890D1FF] text-white px-4 rounded-r">Subscribe</button>
          </div>
          <div className="flex mt-4">
            <a href="#" className="text-[#9890D1FF] px-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-[#9890D1FF] px-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-[#9890D1FF] px-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>




  )
}

export default Footer;