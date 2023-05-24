import React from "react";
import "./skills.css";
const BackendSkills = () => {
    const skills = [
        { name: "Node JS", rate: 50 },
        { name: "Express JS", rate: 50 },
        { name: "MongoDB", rate: 40 },
    ];
    let c = 0.1;
    return (
        <>
            <h2 className='font-medium text-lg tracking-wider text-white'>
                Backend Skills
            </h2>
            <div className='mt-2.5 flex flex-col space-y-3'>
                {skills.map((skill) => {
                    c += 0.1;
                    return (
                        <div>
                            <div className='flex justify-between items-center text-lg text-gray2 mb-1'>
                                <p>{skill.name}</p>
                                <p>{skill.rate}%</p>
                            </div>
                            <div className='skill-bar h-1.5 border border-[#FFB400] w-full flex justify-start items-center rounded-[30px]'>
                                <span
                                    className='skill-per'
                                    style={{
                                        width: `${skill.rate}%`,
                                        animationDelay: `${c}s`,
                                    }}
                                ></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BackendSkills;
