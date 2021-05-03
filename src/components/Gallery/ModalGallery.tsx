import React from 'react';
//assets
import prevIcon from "../../assets/prev-icon-white.png";
import nextIcon from "../../assets/next-icon-white.png";
import xIcon from "../../assets/x-icon.png";

interface Props {
    id: number,
    category?: string,
    url: string
}

const ModalGallery: React.FC<Props> = ({ id, url }) => {
    return (
        <section className="modal-container">
            <img className="modal-image" src={url} alt={`image-${id}`} />
            <img className="prev-icon" src={prevIcon} alt="prev-icon" />
            <img className="next-icon" src={nextIcon} alt="next-icon" />
            <img className="x-icon" src={xIcon} alt="x-icon" />
        </section>
    )
}

export default ModalGallery;
