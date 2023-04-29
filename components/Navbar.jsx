import React from 'react';
import {Link } from "react-router-dom";
export function Navbar(){

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/acerca-de">Acerca de</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}

export function Inicio(){
    return <h1>Bienvenido</h1>
}
export function AcercaDe(){
    return <h1>Acerca de mi</h1>
}
export function Contacto(){
    return <h1>Contacta conmigo</h1>
}