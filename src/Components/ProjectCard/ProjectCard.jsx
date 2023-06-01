import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
const ProjectCard = ({ project = {}, index }) => {
    const {
        name,
        image,
        demo,
        demoAPP,
        technology,
        codeLink,
        description,
        scroll: scrollX,
        icon,
    } = project;
    const [scroll, setScroll] = useState(false);

    return (
        <>
            <div
                className={`flex flex-col lg:flex-row rounded-lg bg-dark1 h-[50rem] gap-6 m-0 w-auto xl:h-[27rem] xl:p-8  ${
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
                                    ? `translateY(${scrollX})`
                                    : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </a>
                </div>{" "}
                <div className=' flex w-full m-0  sm:w-[30rem] h-auto flex-col text-center justify-center'>
                    <h3 className='text-lg xl:text-xl font-semibold text-gray mb-2'>
                        {name} {icon}
                    </h3>
                    <p className='text-text text-sm xl:text-base'>
                        {description}
                    </p>
                    <div className='flex flex-row justify-center items-center gap-2 mt-4'>
                        {technology?.map((item, index) => (
                            <div
                                className='bg-gray text-sm xl:text-base rounded-sm px-1 py-0.5 text-text'
                                key={index}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 flex gap-3 justify-center'>
                        {demoAPP && (
                            <Link className='text-gray '>
                                <span>Demo App</span> 📱
                            </Link>
                        )}
                        {demo && (
                            <Link className='text-gray flex items-center gap-1'>
                                <span>Live Demo</span> <BsLink45Deg />
                            </Link>
                        )}
                        {codeLink?.map((item, index) => {
                            const { frontEnd, backEnd } = item || {};
                            return (
                                <Fragment key={index}>
                                    {!frontEnd && !backEnd && (
                                        <Link className='text-gray flex items-center gap-1'>
                                            Code <BsGithub />
                                        </Link>
                                    )}
                                    {frontEnd && (
                                        <Link className='text-gray flex items-center gap-1'>
                                            Frontend Code <BsGithub />
                                        </Link>
                                    )}
                                    {backEnd && (
                                        <Link className='text-gray flex items-center gap-1'>
                                            Backend Code <BsGithub />
                                        </Link>
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
