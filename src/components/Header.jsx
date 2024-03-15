import { useState } from 'react'
import '../styles/header.css'
import eeveeLogo from '../assets/img/eevee_logo.svg'

function Header() {

    return (
        <>
            <div className='header-container'>
                <nav className='logo-container'>
                    <a href="#" target="_blank">
                        <img src={eeveeLogo} className="logo" alt="Eevee logo" />
                    </a>
                    <h1>Eevee uwu </h1>
                </nav>
            </div>
        </>
    )
}

export default Header
