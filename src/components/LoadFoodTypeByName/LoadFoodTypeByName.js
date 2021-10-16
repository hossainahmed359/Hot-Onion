import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./LoadFoodByName.css"

const LoadFoodTypeByName = ({ food }) => {
    const { strMeal, strMealThumb, strInstructions } = food;
    return (
        <div>
            <Col>
                <Card className="food-card align-items-center text-center border-0">
                    <Card.Img variant="top" className="w-50 rounded-circle my-3 shadow" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 150)}...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default LoadFoodTypeByName;