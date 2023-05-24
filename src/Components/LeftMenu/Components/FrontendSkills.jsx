import React from "react";
import "./skills.css";
const Skills = () => {
    const skills = [
        { name: "React", rate: 80 },
        { name: "React Native", rate: 75 },
        { name: "Redux Toolkit", rate: 75 },
        { name: "RTK Query", rate: 70 },
        { name: "Tailwind CSS", rate: 85 },
        { name: "Firebase", rate: 50 },
    ];
    let c = 0.1;
    return (
        <>
            <h2 className='font-medium text-lg tracking-wider text-white'>
                Frontend Skills
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

export default Skills;
