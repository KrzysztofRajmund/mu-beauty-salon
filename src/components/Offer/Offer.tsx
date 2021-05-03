import React, { useEffect } from 'react';
//react-scroll
import { Link } from 'react-scroll';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//components
import DataOffer from "./DataOffer";

const Offer: React.FC = () => {

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 800,
        });
    }, []);

    const displayFastMenu = () => {
        const targetMenuNav = document.getElementsByClassName(
            'titles-container__menu-nav'
        )[0];
        const targetMenuFast = document.getElementsByClassName(
            'titles-container__menu-fast'
        )[0];
        targetMenuNav.classList.toggle('active');
        targetMenuFast.textContent === 'Menu'
            ? (targetMenuFast.textContent = 'Zamknij')
            : (targetMenuFast.textContent = 'Menu');
    };
    return (
        <React.Fragment>
            <article className='titles-container titles-container__nav-sticky'>

                <section
                    className='titles-container__menu-fast'
                    onClick={displayFastMenu}
                >
                    Menu
          </section>
                <div className='titles-container__menu-nav'>
                    <div className='titles-container__menu-nav-card'>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='makeup'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Makijaż permanentny
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='pedicure'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Pedicure
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='nails'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Stylizacja paznokci
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='radio'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Fale radiowe
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='laser'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Laser IPL
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='mesotherapy'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Mezoterapia
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='depilation'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Depilacja
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='microdermabrasion'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Mikrodermabrazja
                </Link>
                        </h4>
                        <h4 className='titles-container__subtitle'>
                            <Link
                                to='face'
                                duration={650}
                                spy={true}
                                smooth={true}
                                offset={-225}
                                onClick={displayFastMenu}
                            >
                                Zabiegi pielęgnacyjne na twarz
                </Link>
                        </h4>
                    </div>
                </div>

            </article>
            <DataOffer />
        </React.Fragment>
    )
}

export default Offer
