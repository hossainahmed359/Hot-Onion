import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import LoadFoodTypeByName from '../LoadFoodTypeByName/LoadFoodTypeByName';

const Food = ({ foodsName }) => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodsName}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [foodsName])

    return (
        <div>
            <Container className="mb-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {foods.map(food => foods.indexOf(food) < 6 && <LoadFoodTypeByName key={food.idMeal} food={food}></LoadFoodTypeByName>)}
                </Row>
                <div className="text-center my-5">
                    <button className="btn btn-secondary btn-large rounded">Checkout Our Food</button>
                </div>
            </Container>
        </div>
    );
};

export default Food;