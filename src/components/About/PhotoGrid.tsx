import React from 'react';
//assets
import OfficeRoom from "../../assets/img/mu-2.jpg";
import WaitingRoom from "../../assets/img/mu-7.jpg";
import Treatment from "../../assets/img/mu-18.jpg";


const PhotoGrid: React.FC = () => {
    return (
        <section className="photogrid">
            <article>
                <img src={Treatment} alt="image" />

            </article>
            <article className="photogridMiddleImage">
                <img src={OfficeRoom} alt="image" />

            </article>
            <article>
                <img src={WaitingRoom} alt="image" />

            </article>
        </section>
    )
}

export default PhotoGrid
