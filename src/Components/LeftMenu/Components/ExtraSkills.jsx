import React from "react";
import { Icon } from "../../Icon/Icon";
const ExtraSkills = () => {
    const skills = [
        {
            name: "Photoshop, Figma, Adobe Xd",
        },
        {
            name: "Git Knowledge",
        },
        {
            name: "Chrome Devtools",
        },
        {
            name: "Postman",
        },
    ];
    return (
        <>
            <h2 className='font-medium text-lg tracking-wider text-white'>
                Extra Skills
            </h2>
            <div className='mt-5 flex flex-col space-y-3'>
                {skills.map((skill) => {
                    return (
                        <div
                            key={skill.name}
                            className='flex justify-between items-start text-lg text-gray2 mb-1'
                        >
                            <Icon name={"Extra"} className='stroke-yellow1' />
                            <p className='text-sm text-right'>{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ExtraSkills;
