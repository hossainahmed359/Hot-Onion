import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import OurSpecialities from '../OurSpecialities/OurSpecialities';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <WhyChooseUs></WhyChooseUs>
            <OurSpecialities></OurSpecialities>
            <Footer></Footer>
        </div>
    );
};

export default Home;