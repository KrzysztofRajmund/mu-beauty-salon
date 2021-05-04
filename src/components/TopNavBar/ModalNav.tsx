import React, { useState } from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo-black.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

const ModalNav: React.FC = () => {

    return (

        <div className="modalNav">
            <section className="modal-logo">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
            </section>
            <section className="modal-menu">
                <Link to="/onas">O Nas</Link>
                <Link to="/zabiegi">Oferta</Link>
                <Link to="/galeria">Galeria</Link>
                <Link to="/kontakt">Kontakt</Link>
            </section>
            <section className="modal-socialmedia">
                <a href="https://www.facebook.com/MagiaUrodyProfesjonalnyGabinetKosmetyczny" target="_blank"><img src={Facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/magiaurodyszczecin/" target="_blank"><img src={Instagram} alt="instagram" /></a>
            </section>
        </div>

    )
}

export default ModalNav;