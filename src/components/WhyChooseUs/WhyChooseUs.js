import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const WhyChooseUs = () => {
    return (
        <Container>
            <Col xs={10} md={10} lg={6} className="mt-5">
                <Card className="border-0 my-5">
                    <Card.Body>
                        <Card.Title>
                            <h2>Why Choose Us ?</h2>
                        </Card.Title>
                        <Card.Text className="my-3">
                            It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default WhyChooseUs;