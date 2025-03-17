import React from 'react'
import Amigos from '../components/Amigos/Amigos';
export default function Home() {
    let username ={
        name:'Rosa',
        streamFavs: ['Olga', 'LuzuTV', 'Vorterix']
      }
    
    let amigos = [
        {
            id: 1,
            name: 'Pedro',
            sesion: 'Online'
        },
        {
            id: 2,
            name: 'Eugenia',
            sesion: 'Offline'
        },
        {
            id: 3,
            name: 'Luis',
            sesion: 'Offline'
        },
        {
            id: 4,
            name: 'Camila',
            sesion: 'Online'
        },
    ]

    return (
        <React.Fragment>
            <section >
            <div className='' >
                <h1>Bienvenido usuario: {username.name} </h1>
            </div>
            <div>
                <h2>Tus Streams favoritos son:</h2>
                <ul>
                {
                    username.streamFavs.map((elm) => <li>{elm}</li> )
                }
                </ul>
            </div>
            </section>
            <Amigos arrAmigos={amigos} />
        </React.Fragment>
    );
}
