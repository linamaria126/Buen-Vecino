import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const CardBoard = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className='container'>
            <div >
                {
                 store.publicaciones.map((publicacion) => {
                    return (
                        <div key={publicacion.id}>
                            <div></div>
                            <img src="https://picsum.photos/40" className='rounded-full' />
                            <div>{publicacion.contenido}</div>
                        </div>
                    )
                })}

            </div>
            <div>

            </div>
        </div>
    )
}

export default CardBoard