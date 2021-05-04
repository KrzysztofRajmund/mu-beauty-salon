import React, { useEffect, useState } from 'react';
//components
import Header from '../utils/Header';
//assets
import ImageHeader from "../../assets/img/about.jpg";
import Portrait from "../../assets/img/portrait.jpg";

const About: React.FC = () => {

    const title = "Magia Urody";
    const desc = " Magia Urody Beata Gozdek to wyjątkowy salon kosmetyczny na mapie Szczecina.To miejsce, w którym w odpowiedni sposób zadbasz o swoje ciało, jak i umysł."
    return (
        <React.Fragment>
            <Header image={ImageHeader} title={title} desc={desc} />
            <section className="about">
                <article className="aboutDesc">
                    <h3>Przywracamy skórze perfekcyjny wygląd, upiększamy
                    dłonie i stopy, relaksujemy ciało. Usuwamy defekty,
                    przywracamy pewność siebie i zadowolenie z ciała. Naszym atutem jest zamiłowanie do wykonywanej pracy, którą wykonujemy z pasji a nie z obowiązku a wszystkie zabiegi wykonywane są na najnowocześniejszym sprzęcie oraz
                        są w 100% bezpieczne dla naszych klientów.</h3>
                </article>
                <article className="aboutImage">
                    <img src={Portrait} alt="image-portrait" />
                </article>


            </section>
        </React.Fragment>
    )
}

export default About;

