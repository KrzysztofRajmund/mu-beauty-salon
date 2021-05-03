import React, { useEffect, useState } from 'react';

//json
import imagesData from "../../imagesData.json";
//components
import ModalGallery from './ModalGallery';
import Loading from '../utils/Loading';
import Header from '../utils/Header';
//assets
import ImageHeader from "../../assets/img/mu-7.jpg";

const Gallery: React.FC = () => {

    //type or interface
    type ImageObject = {
        id: number,
        category?: string,
        url: string
    }

    //global var
    const plusSign: number = 1;
    const minusSign: number = -1;
    //useState hooks
    const [modal, setModal] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    //useEffect Hook
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1000)

    }, [])


    //change image function
    const anotherImage = (sign: number) => {
        let newImage = imagesData.images.filter((x) => x.id === modalImage.id + sign)
        setModalImage(newImage[0])
    }


    //open modal
    const openModalHandler = (image: ImageObject) => {
        setModal(true);
        setModalImage(image);

    }

    //close modal + conditional image change with click
    const modalHandler = (e: any) => {
        if (e.target.className === "modal-container" || e.target.className === "x-icon") {
            setModal(false)
        }
        if (e.target.className === "next-icon" && modalImage.id < imagesData.images.length) {
            anotherImage(plusSign);
        }
        if (e.target.className === "prev-icon" && modalImage.id !== 1) {
            anotherImage(minusSign);
        }
    }

    //image change conditional with keydown arrows
    if (modal) {
        window.onkeydown = (e: any) => {
            switch (e.keyCode) {
                case 39:
                    if (modalImage.id < imagesData.images.length) {
                        anotherImage(plusSign);
                    }
                    break;

                case 37:
                    if (modalImage.id !== 1) {
                        anotherImage(minusSign);
                    }
                    break;

            }
        }
    }

    const title = "Album";
    const desc = "Magia Urody na zdjęciach.";

    return (
        <React.Fragment>
            <Header image={ImageHeader} title={title} desc={desc} />
            { loading ? <Loading /> : (
                <section className="gallery">

                    {imagesData.images.map((image) => {
                        return (
                            <div key={image.id} className="gallery-image" onClick={() => openModalHandler(image)}>
                                <img src={image.url} alt={`image-${image.id}`} />
                            </div>

                        )
                    })}
                    <div onClick={(e) => modalHandler(e)}>
                        {modal && <ModalGallery id={modalImage.id} url={modalImage.url} />}
                    </div>
                </section>
            )}


        </React.Fragment>

    )
}

export default Gallery;
