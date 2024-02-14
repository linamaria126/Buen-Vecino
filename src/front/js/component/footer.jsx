import React from 'react';
import logo from '../../img/logo.png';

const Footer = () => {
  return (
    <footer class="bg-white text-gray-600 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <div className="py-2">
            <img src={logo} alt="logo" className="h-10 w-30" />

          </div>
          <nav class="mb-4">
            <a href="#" class="px-2">Sobre Nosotros</a>
            <a href="#" class="px-2">Características</a>
            <a href="#" class="px-2">Contactanos</a>
            <a href="#" class="px-2">Preguntas Frequentes</a>
          </nav>
          <select class="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>Ingles</option>
            <option>Español</option>
          </select>
          <p class="text-xs mt-4">&copy; 2024 Brand, Inc. - Privacy - Terms - Sitemap</p>
        </div>
        <div class="text-sm">
          <h3 class="font-bold mb-2">Suscríbete a nuestro boletín</h3>
          <div class="flex">
            <input type="email" placeholder="Ingresa tu correo electrónico" class="border border-gray-300 rounded-l px-4 py-2 w-full" />
            <button class="bg-[#9890D1FF] text-white px-4 rounded-r">Subscribe</button>
          </div>
          <div class="flex mt-4">
            <a href="#" class="text-[#9890D1FF] px-2"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-[#9890D1FF] px-2"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-[#9890D1FF] px-2"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>




  )
}

export default Footer;