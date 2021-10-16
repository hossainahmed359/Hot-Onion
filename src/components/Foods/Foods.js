import React from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
import FoodTypeLInk from '../FoodTypeLInk/FoodTypeLInk';
import './Food.css'

const Foods = () => {
    const [foodsName, setFoodsName] = useState('b')

    const foodType = type => {
        setFoodsName(type)
    }


    return (
        <div className="">
            <FoodTypeLInk
                foodType={foodType}
            ></FoodTypeLInk>

            <Food
                foodsName={foodsName}
            ></Food>

        </div>
    );
};

export default Foods;