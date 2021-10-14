import React from 'react';
import { FormControl, InputGroup, Button, Carousel, Col } from 'react-bootstrap';
import './Slider.css'
//banner image
import img1 from '../images/lunch/lunch1.png';
import img2 from '../images/lunch/lunch4.png';
import img3 from '../images/lunch/lunch3.png';

const Slider = () => {
    return (
        <div className="banner">
            <div className="py-5">
                <h1>Great Food Great Choice</h1>
            </div>
            <div className="d-flex mb-5">
                <Col>
                    <img
                        className="d-block w-75"
                        src={img3}
                        alt="First slide"
                    />
                </Col>
                <Col>
                    <h2>Best Food Waiting For Your Belly</h2>
                    <InputGroup className="mx-auto mt-5 w-50">
                        <FormControl
                            placeholder="Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="danger" id="button-addon2">
                            Sign In
                        </Button>
                    </InputGroup>
                </Col>
            </div>
        </div>
    );
};

export default Slider;