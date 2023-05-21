import React from "react";
import Hero from "./Sections/Hero";
import RightMenu from "../../Componts/RightMenu/RightMenu";

const Home = () => {
    return (
        <div className='bg-light_background h-[100vh] w-full'>
            <RightMenu />
            <Hero />
        </div>
    );
};

export default Home;
