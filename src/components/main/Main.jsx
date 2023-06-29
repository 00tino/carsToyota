import React from 'react'
import style from './Main.module.css'

export const Main = () => {
    return (
        <section className={style.container}>
            <h1>Descubrí todos los modelos</h1>

            <div className={style.subNavbar}>

                <div className={style.filter}>
                    <span>Filtrar por</span>

                    <button type="button">Todos</button>
                    <button type="button">Autos</button>
                    <button type="button">Pickups y Comerciales</button>
                    <button type="button">SUVs y Crossovers</button>
                </div>

                <div className={style.order}>
                    <span>Ordenar por ▼</span>
                </div>

            </div>
        </section>
    )
}
