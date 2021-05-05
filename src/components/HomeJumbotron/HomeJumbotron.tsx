import React from 'react';
import { Carousel } from "react-bootstrap";
import SlideOne from "../../assets/img/mu-20.jpg";
import SlideTwo from "../../assets/img/homejumbotron2.jpg";

const HomeJumbotron: React.FC = () => {

    return (
        <React.Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SlideOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Makijaż stały</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src='https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
                        src={SlideTwo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Mezoterapia</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    );

}

export default HomeJumbotron;
