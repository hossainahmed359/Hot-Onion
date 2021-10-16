import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './OurSpecialities.css'
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faBell, faTruck } from '@fortawesome/free-solid-svg-icons'

//images
import img from '../../images/Image/chef-cook-food-33614.png'
import img2 from '../../images/Image/adult-blur-blurred-background-687824.png'
import img3 from '../../images/Image/architecture-building-city-2047397.png'

const OurSpecialities = () => {

    const fastDeliveryIcon = <FontAwesomeIcon icon={faTrain} />
    const valuedResponderIcon = <FontAwesomeIcon icon={faBell} />
    const homeDeliveryIcon = <FontAwesomeIcon icon={faTruck} />
    return (
        <Container className="mb-5">
            <Row xs={1} md={2} lg={3} className="g-5">
                <Card className="services border-0">
                    <Card.Img variant="top" className="my-2" src={img} />
                    <Card.Body>
                        <Card.Title> <span className="text-danger me-2">{fastDeliveryIcon}</span> Fast Delivery</Card.Title>
                        <Card.Text>
                            We are providing door to door delivery service  with guarantee. Otherwise you will get your money back
                        </Card.Text>
                        <button className="btn btn-danger rounded-pill">Show More</button>
                    </Card.Body>
                </Card>
                <Card className="services border-0">
                    <Card.Img variant="top" className="my-2" src={img2} />
                    <Card.Body>
                        <Card.Title><span className="text-danger me-2">{valuedResponderIcon}</span> A Good Auto Responder</Card.Title>
                        <Card.Text>
                            This is an improved way to initiate conversations. A valued responder badge is associated with it. It is for the members who constantly share valuable answers ...
                        </Card.Text>
                        <button className="btn btn-danger rounded-pill">Show More</button>
                    </Card.Body>
                </Card>
                <Card className="services border-0">
                    <Card.Img variant="top" className="my-2" src={img3} />
                    <Card.Body>
                        <Card.Title><span className="text-danger me-2">{homeDeliveryIcon}</span> Home Delivery</Card.Title>
                        <Card.Text>
                            Order food from restaurants or groceries from top shops across Bangladesh ✓ Curated selection of dishes and household need ✓ Safe & easy payment options.
                        </Card.Text>
                        <button className="btn btn-danger rounded-pill">Show More</button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default OurSpecialities;