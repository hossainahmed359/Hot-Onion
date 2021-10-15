import React from 'react';
import { Carousel } from 'react-bootstrap';


//Banner Images
import img from '../../images/Banner/Banner1.png'
import img2 from '../../images/Banner/Banner2.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;