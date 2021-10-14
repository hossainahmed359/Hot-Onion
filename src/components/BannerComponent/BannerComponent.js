
import React from 'react';
import { Col, Container, FormControl, InputGroup, Button } from 'react-bootstrap';
import './BannerComponent.css'
//banner image

import img3 from '../../images/lunch/lunch3.png';

const BannerComponent = () => {
    return (
        <div className="banner text-center">
            <Container fluid className="">
                <div className="banner">
                    <div className="py-5">
                        <h1>Great Food Great Choice</h1>
                    </div>
                    <div className="d-flex justify-content-around mb-5">
                        <Col xs={12} md={4} lg={6}>
                            <img
                                className="d-block w-50 mx-auto"
                                src={img3}
                                alt="First slide"
                            />
                        </Col>
                        <Col xs={12} md={15} lg={6}>
                            <InputGroup className="me-auto mt-5 w-50 ">
                                <FormControl
                                    placeholder="Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="danger" className="rounded" id="button-addon2">
                                    Sign In
                                </Button>
                            </InputGroup>
                            <h1 className="me-auto mt-5 w-50 ">Order Now !</h1>
                        </Col>

                    </div>
                </div>
            </Container>
            <br />
        </div>
    );
};

export default BannerComponent;