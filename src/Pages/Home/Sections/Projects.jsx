import React from "react";
import Header from "../../../Components/Header/Header";
import { projectElements } from "../../../Components/LeftMenu/Components/projectsElements";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";

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

            <div className='flex flex-col wi-full h-auto gap-10'>
                {projectElements.map((project, index) => {
                    return (
                        <ProjectCard
                            project={project}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
