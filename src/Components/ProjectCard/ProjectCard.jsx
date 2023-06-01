import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project = {}, index }) => {
    const {
        name,
        id,
        image,
        demo,
        demoApp,
        technology,
        live,
        codeLink,
        description,
    } = project;
    const [scroll, setScroll] = useState(false);

    // .pro__text {
    //     display: flex;
    //     width: 30rem;
    //     height: auto;
    //     flex-direction: column;
    //     text-align: center;
    //     justify-content: center;
    // }
    // @media (max-width: 1020px) {
    //     .pro__text {
    //         margin: 0 auto;
    //     }
    // }
    // @media (max-width: 400px) {
    //     .pro__text {
    //         width: 100%;
    //     }
    // }
    // .pro__text img {
    //     width: 7rem;
    //     position: absolute;
    //     top: -2px;
    //     right: -19px;
    // }
    // .pro__text h3 {
    //     font-size: 24;
    //     text-transform: uppercase;
    //     color: red;
    //     margin-bottom: 2rem;
    //     position: relative;
    // }
    // .pro__text p {
    //     font-size: 16;
    //     color: red;
    //     text-align: center;
    //     text-transform: none;
    //     font-weight: 500;
    // }

    return (
        <>
            <div
                className={`flex flex-col lg:flex-row rounded-xl bg-dark1 h-[50rem] gap-12 m-0 w-auto xl:h-[27rem] xl:p-8 xl:gap-32 ${
                    index % 2 === 0 && "flex-row-reverse"
                }`}
            >
                <div className='w-full xl:w-[45rem] h-auto rounded-lg overflow-hidden'>
                    <a target='_blank' href={demo} rel='noreferrer'>
                        <img
                            src={image}
                            alt='website'
                            style={{
                                transform: scroll
                                    ? `translateY(${"-83%"})`
                                    : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </a>
                </div>
                <div className='pro__text'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className='stack'>
                        <p>{"techno1"}</p>
                        <p>{"techno2"}</p>
                    </div>
                    <div className='links'>
                        <a target='_blank' href={"code"} rel='noreferrer'>
                            Code <i className='fa-brands fa-github'></i>
                        </a>
                        <a target='_blank' href={"demo"} rel='noreferrer'>
                            Live Demo
                            <i className='fa-solid fa-arrow-up-right-from-square link-icon'></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
