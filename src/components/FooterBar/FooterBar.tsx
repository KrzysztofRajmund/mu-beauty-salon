import React from 'react';
//assets
import LogoBlack from "../../assets/logo-black.png"

const FooterBar: React.FC = () => {

    const handleUpClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className="footer">
            <article className="footer-top">
                <img src={LogoBlack} alt="logo" />
            </article>
            <article className="footer-middle">
                <h5>Copyrights 2021. Created by RajmundTech</h5>
            </article>
            <article className="footer-bottom" onClick={handleUpClick}>
                <div className="footer-bottom-arrow"></div>
                <h4>up</h4>
            </article>
        </section>
    )
}

export default FooterBar;