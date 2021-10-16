import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import OurSpecialities from '../OurSpecialities/OurSpecialities';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <WhyChooseUs></WhyChooseUs>
            <OurSpecialities></OurSpecialities>
        </div>
    );
};

export default Home;