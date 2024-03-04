import React, { useState, useContext, useEffect  } from "react";
import { Context } from "../store/appContext.js";

const ModalBoard = () => {


    const { store, actions } = useContext(Context)

    const [modalClose, setModalClose] = useState(false)
    const [publicacion, setPublicacion] = useState({
        contenido: "",
        unidad_residencial_id: ''
    })
    const handlePost = (event) => {
        setPublicacion({...publicacion, [event.target.name]: event.target.value})
        console.log(publicacion)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await actions.addPublicacion(publicacion)
        setModalClose(false)
        console.log(publicacion)

    }
    useEffect(() => {
        actions.getPublicaciones();
    }, []);

    return (

        <div>

            <div className="container pb-10 flex justify-center">
            

                <button className="mt-4 bg-[#796FC3FF] text-white rounded-full hover:bg-[#554e88] p-2" onClick={() => setModalClose(true)}>Agregar tu publicacion</button>

                {/* de aqui sale el modal  */}
                {modalClose && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-baseline pt-12 ">
                        <form className="bg-white p-5 rounded flex flex-col  gap-5 w-[600px]" onSubmit={handleSubmit}>
                            <div>
                                <label className=" w-[500px] flex justify-start mr-3 font-semibold" htmlFor="publicacion">Agrega tu publicacion</label>
                                <textarea type="text" onChange={handlePost} name="contenido" id="publicacion" placeholder="Contenido" className="form-control  rounded-lg px-2 border-gray-300 mt-3 flex items-center justify-center" />
                            </div>                            
                            <div className="flex space-x-3">
                                <button className="mt-4 bg-[#796FC3FF] text-white rounded-full hover:bg-[#554e88] p-2" onClick={() => setModalClose(false)}>
                                    Close modal
                                </button>
                                <button className="mt-4 bg-[#6BC1E2FF] text-white rounded-full hover:bg-[#60acca] p-2" type="submit" >
                                    Publicar
                                </button>
                            </div>
                        </form>
                    </div>)}
            </div>
        </div>
    );
};

export default ModalBoard