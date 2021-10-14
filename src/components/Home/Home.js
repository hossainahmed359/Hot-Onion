import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import NavigationBar from '../NavigationBar/NavigationBar';



const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <BannerComponent></BannerComponent>
        </div>
    );
};

export default Home;