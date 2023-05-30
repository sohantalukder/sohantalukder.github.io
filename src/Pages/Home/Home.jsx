import React from "react";
import Hero from "./Sections/Hero";
import Education from "./Sections/Education";
import WorkExperience from "./Sections/WorkExperience";
import GetInTouch from "./Sections/GetInTouch";
import Location from "./Sections/Location";
import CopyRight from "../../Components/CopyRight/CopyRight";
import Services from "./Sections/Services";
import Blogs from "./Sections/Blogs";

const Home = () => {
    return (
        <div className='px-5 lg:px-0 '>
            <Hero />
            <Services />
            <Blogs />
            <Education />
            <WorkExperience />
            <GetInTouch />
            <Location />
            <CopyRight />
        </div>
    );
};

export default Home;
