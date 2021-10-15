import React from 'react';
import { Nav } from 'react-bootstrap';
import './FoodTypeLink.css'

const FoodTypeLInk = ({ foodType }) => {
    return (
        <div className="food-links my-5">
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => foodType('b')}>Breakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => foodType('l')}>Lunch</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => foodType('d')}>Dinner</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default FoodTypeLInk;