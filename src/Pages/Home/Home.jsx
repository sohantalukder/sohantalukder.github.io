import React from "react";
import Hero from "./Sections/Hero";
import Education from "./Sections/Education";
import WorkExperience from "./Sections/WorkExperience";

const Home = () => {
    return (
        <div className='col-span-12 lg:col-span-7 xl:col-span-9   px-5 md:px-0 ml-0 md:ml-6 lg:ml-8'>
            <Hero />
            <Education />
            <WorkExperience />
        </div>
    );
};

export default Home;
