import React from "react";
import Header from "../../../Components/Header/Header";

const Projects = () => {
    return (
        <div className='mt-12 md:mt-[70px]' id='work'>
            <Header
                tittle={"My Projects"}
                style={"mb-6 lg:mb-12 "}
                description={
                    "Discover an assortment of my creative ventures and accomplishments in My Projects. From innovative software development to captivating artistic endeavors, explore the diverse range of projects that showcase my passion for exploration and achievement."
                }
            />
        </div>
    );
};

export default Projects;
