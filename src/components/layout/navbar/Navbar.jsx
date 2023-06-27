import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.leftContainer}>
                    <img src='./Logo.png' />
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Modelo</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Ficha de Modelo</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.rightContainer}>
                    <span className={style.menu}>Menú</span>
                    <span className={style.hamburger}>☰</span>
                </div>
            </div>
        </>
    )
}
