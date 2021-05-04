import React, { useState } from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo-black.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

const ModalNav: React.FC = () => {

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (

        <div className="modalNav">
            <section className="modal-logo">
                <Link to="/" onClick={scrollTop}><img src={Logo} alt="logo" /></Link>
            </section>
            <section className="modal-menu">
                <Link to="/onas" onClick={scrollTop}>O Nas</Link>
                <Link to="/zabiegi" onClick={scrollTop}>Oferta</Link>
                <Link to="/galeria" onClick={scrollTop}>Galeria</Link>
                <Link to="/kontakt" onClick={scrollTop}>Kontakt</Link>
            </section>
            <section className="modal-socialmedia">
                <a href="https://www.facebook.com/MagiaUrodyProfesjonalnyGabinetKosmetyczny" target="_blank"><img src={Facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/magiaurodyszczecin/" target="_blank"><img src={Instagram} alt="instagram" /></a>
            </section>
        </div>

    )
}

export default ModalNav;