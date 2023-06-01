import React from "react";
import Hero from "./Sections/Hero";
import Education from "./Sections/Education";
import WorkExperience from "./Sections/WorkExperience";
import GetInTouch from "./Sections/GetInTouch";
import Location from "./Sections/Location";
import CopyRight from "../../Components/CopyRight/CopyRight";
import Services from "./Sections/Services";
import Blogs from "./Sections/Blogs";
import Projects from "./Sections/Projects";

const Home = () => {
    return (
        <div className='container mx-auto px-5 3xl:px-0 max-w-7xl'>
            <Hero />
            <Services />
            <WorkExperience />
            <Projects />
            <Education />
            <Blogs />
            <GetInTouch />
            <Location />
            <CopyRight />
        </div>
    );
};

export default Home;
