import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
    const navigate = useNavigate();
    const { store, actions} = useContext(Context)
    const [newLogin, setLogin] = useState({
        email:"",
        password: "",
    })
    const handleChange = (e)=> {
        setLogin({ ...newLogin, [e.target.name]: e.target.value });
        console.log(newLogin);
      };

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login(newLogin)
        navigate("/homeuser")
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9890D1FF]">
        <div className="flex-1 max-w-4xl mx-auto p-10">
            <div className="flex">
           
                <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-2">Bienvenido 👋</h2>
                    <p className="mb-8">inicia sesion en tu cuenta</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Cual es tu e-mail?
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="Enter your email" 
                        value={newLogin.email} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Digita tu contraseña
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password"
                        name="password"
                        placeholder="******************"
                        value={newLogin.password}
                        onChange={handleChange}
                        />
                        <p className="text-xs italic text-right text-blue-500 hover:text-blue-800 cursor-pointer">Olvidaste tú password?</p>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox text-indigo-600" checked/>
                            <span className="ml-2">Remember me</span>
                        </label>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={handleLogin}
                        >
                            Continúa
                        </button>
                    </div>
                    <p className="text-center text-gray-500 text-xs">
                        Don't have an account? <span className="text-blue-500 hover:text-blue-800 cursor-pointer">Sign up</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;