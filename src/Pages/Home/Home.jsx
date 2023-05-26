import React from "react";
import Hero from "./Sections/Hero";
import Education from "./Sections/Education";

const Home = () => {
    return (
        <div className='col-span-12 lg:col-span-7 xl:col-span-9  px-5 md:px-0'>
            <Hero />
            <Education />
        </div>
    );
};

export default Home;
