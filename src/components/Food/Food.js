import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
            <h1>{foods.length}</h1>
            {foods.map(food => foods.indexOf(food) < 6 && <LoadFoodTypeByName key={food.idMeal} food={food}></LoadFoodTypeByName>)}
        </div>
    );
};

export default Food;