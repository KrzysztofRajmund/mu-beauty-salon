import React from 'react';
//components
import Header from '../utils/Header';
//assets
import ImageHeader from "../../assets/img/about.jpg";

const About: React.FC = () => {

    const title = "Magia Urody";
    const desc = " Magia Urody Beata Gozdek to wyjątkowy salon kosmetyczny na mapie Szczecina.To miejsce, w którym w odpowiedni sposób zadbasz o swoje ciało, jak i umysł."
    return (
        <div>
            <Header image={ImageHeader} title={title} desc={desc} />

        </div>
    )
}

export default About;

