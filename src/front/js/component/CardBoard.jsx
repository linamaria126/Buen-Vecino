import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const CardBoard = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='container'>
            <div className='bg-gray font-bold'>Fecha de publicacion</div>
            <div>
                <div className='my-3'>Carmen Martinez</div>
                <div className='flex'>
                    <div ><img className='rounded-full mr-4' src="https://picsum.photos/40" alt="" /></div>
                    <div className='flex items-center rounded-2xl px-2 bg-gray-100'>esto es una pruba de </div>
                </div>
                <hr className='mt-6'></hr>
            </div>
            <div >
                {store.publicaciones.map((publicacion) => {
                    return(
                    <div key={publicacion.id}>
                        
                    </div>   
                    )
                })}
            </div>
            <div>
                <div className='my-3'>Carmen Martinez</div>
                <div className='flex'>
                    <div ><img className='rounded-full mr-4' src="https://picsum.photos/40" alt="" /></div>
                    <div className='flex items-center rounded-2xl px-2 bg-gray-100'>esto es una pruba de </div>
                </div>
                <hr className='mt-6'></hr>
            </div>
        </div>


    )
}

export default CardBoard