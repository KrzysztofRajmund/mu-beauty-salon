import React, { useState } from 'react';
//react-router
import { Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo-black.png"
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import ModalNav from './ModalNav';

const TopNavBar: React.FC = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    };

    const closeModal = () => {
        setModal(false);
    }
    return (
        <nav className="topnav-container">
            <section onClick={openModal} className='nav-icon'>
                <div
                    className={modal ? 'nav-icon__btn active' : 'nav-icon__btn not-active'}
                >
                    <span className=' nav-icon__span nav-icon__span-first'></span>
                    <span className='nav-icon__span nav-icon__span-second'></span>
                    <span className='nav-icon__span nav-icon__span-third'></span>
                </div>
            </section>
            {modal ? <div onClick={closeModal}><ModalNav /> </div> : (<React.Fragment>
                <section className="topnav-logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </section>
                <section className="topnav-menu">
                    <Link to="/onas">O Nas</Link>
                    <Link to="/zabiegi">Oferta</Link>
                    <Link to="/galeria">Galeria</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </section>
                <section className="topnav-socialmedia">
                    <a href="https://www.facebook.com/MagiaUrodyProfesjonalnyGabinetKosmetyczny" target="_blank"><img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/magiaurodyszczecin/" target="_blank"><img src={Instagram} alt="instagram" /></a>
                </section>
            </React.Fragment>

            )}


        </nav>
    )
}

export default TopNavBar;