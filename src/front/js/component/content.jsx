import React from 'react';
import Login from '../pages/Login.jsx';
import { Link } from 'react-router-dom';
import '../../styles/index.css';
import object from '../../img/object.png';
import house from '../../img/house.png';
import landingphoto from '../../img/landingphoto.jpg';
import Mundo2 from '../component/icons/mundo2.js';
import Icon3 from '../component/icons/icon3.js';
import Icon4 from '../component/icons/icon4.js';
import Safety from '../component/icons/safety.js';





const Content = () => {
  return (
    <>
      <section className="py-20" id="quienes-somos">
        <div className="container mx-auto">

          <div class="grid sm:grid-cols-1 md:grid-cols-2">
            <div>
              <p class="font-body text-black-600">La plataforma que conecta residentes</p>
              <h2 class="text-3xl font-bold font-title text-black-600">Quiénes somos</h2>
              <img src={object} className="h-5 w-25 mb-2" />
              <p class="mb-6 font-body">Somos la aplicación que te conecta con los integrantes de tu misma Unidad Residencial permitiendo encontrar el servicio que requieres más cerca de ti, y haciendo más fácil la consecución de clientes para tu Negocio ó para el servicio que prestas.</p>
              <p class="mb-8 font-body">Que esperas para conectar con un Buen Vecino!!!</p>
              <Link to={"/userRegister"} button class="bg-[#9890D1FF] text-white px-6 py-2 rounded-full font-body">Registrate</Link>
            </div>
            <div>
              <img src={house} alt="house ilustration" className="bg-[#F2FAFCFF] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-100" py-15 id="caracteristicas">
        <div className="container mx-auto">
          <p className="text-xl font-body text-center text-black-600">Todo una experiencia para tu Unidad Recidencial</p>
          <h2 className="text-3xl font-bold font-title text-center text-black-600 mb-4">Características</h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3">

            <div className="relative bg-[#FFDFF1FF] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold font-title mb-2 relative z-10">Registro Verificado</h3>
              <p className="mb-4 font-body relative z-10">Buen vecino se preocupa por tu seguridad y tu privacidad. Todos los perfiles son verificados por tu administración antes de ser publicados en la plataforma para garantizar una experiencia segura.</p>
              <div className="absolute bottom-4 right-5 z-0 w-25 h-15">
                <Safety alt="Verified registration icon" className=" registration_logo   fill-pink-300" />
              </div>
            </div>

            <div className=" bg-[#D6D3EDFF] p-6 rounded-lg shadow-lg col-span-2 flex items-center pt-0">
              <div>
                <h3 className="text-xl font-bold mb-2 p-0 ">Board de Negocios</h3>
                <p className="mb-4">Buen Vecino es una plataforma que permite a los residentes de una Unidad residencial ofrecer y buscar servicios a otros vecinos. Conecta con otros residentes y descubre los servicios que tiene para ofrecer</p>
              </div>
              <Icon3 alt="Business board icon" className=" w-25 h-15 fill-violet-400" />
            </div>

            <div className="bg-[#E2F0DBFF] p-6 rounded-lg shadow-lg col-span-2 flex items-center pt-0">
              <div>
                <h3 className="text-xl font-bold mb-2 p-0">Reserva tus espacios</h3>
                <p className="mb-4">Buen vecino te ayuda a gestionar con la administración de tu Unidad Residencial la reserva de tus zonas sociales, Gimnasio, Zonas húmedas, y los espacios sociales con los que cuenta tu Unidad.</p>
              </div>
              <Icon4 alt="Reserve spaces icon" class="w-25 h-15 fill-green-800" />

            </div>

            <div class="bg-[#F2FAFCFF] p-6 rounded-lg shadow-lg relative">
              <h3 class="text-xl font-bold font-title mb-2 relative z-10">Servicios de votación</h3>
              <p class="mb-4 font-body relative z-10">Buen vecino te ahorra gastos adicionales a tu Unidad residencial y permite el servicio de votación en Asambleas de Copropietarios.</p>
              <div className="absolute bottom-0 right-0 z-0 w-25 h-15">
                <Mundo2 alt="Voting services icon" class="fill-sky-300" />
              </div>
            </div>

          </div>
        </div>
      </section >

      <section className="py-20">

        <img src={landingphoto} alt="photo space" className="w-full" />
      </section>




      <section class="bg-[#5549AFFF] text-white py-20">
        <div class="container mx-auto flex justify-center">
          <div class="text-center">
            <h2 class="text-3xl font-bold font-title mb-4">Eres administrador???</h2>
            <button class="bg-[#6BC1E2FF] text-white-600 px-6 py-2 rounded-full font-body">Regístrate aquí
              <Link to={'/registration'} button className="bg-white   lg:inline-block lg:mt-0 text-[#796FC3FF] hover:bg-[#796FC3FF] text-[#796FC3FF] font-body py-2 px-2 rounded-full md:mt-3 ms-5">
                Registrate</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}


export default Content;