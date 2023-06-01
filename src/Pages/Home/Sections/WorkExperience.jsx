import React from "react";
import Header from "../../../Components/Header/Header";

const WorkExperience = () => {
    const works = [
        {
            position: "Software Engineer",
            location: "Nikunja-2, Dhaka",
            company: "TechVillage",
            duration: "July 2022 - Present",
            responsibilities: [
                "Cross-platform Mobile App Development using React Native",
                "Try to provide quick solutions and proactive troubleshooting support to swiftly resolve subtle and complex issues as the team Member.",
                "Worked as a productive and positive team member to code, test and debug operations that saved time.",
                "Evaluated and became knowledgeable in new standards, technologies, and trends in mobile apps so that more than 3 technologies and 24+ packages became familiar and successfully implemented",
            ],
        },
        {
            position: "Intern Web Developer",
            location: "Shyamoli, Dhaka",
            company: "Bangla Puzzle Limited",
            duration: "March 2022 - June 2022",
            responsibilities: [
                "Try to learn web technologies, how to solve web complex problems from my team leader",
                "Collaborating with the development team and business analyst team",
                "Evaluated and became knowledgeable in new standards, technologies, css framework like Tailwind CSS, Google Material UI also work on Chakra UI.",
                "Tried to understand how to do web development with business analyst and learned web testing with SQA team.",
            ],
        },
    ];
    return (
        <div className='mt-12 md:mt-[70px]' id='experience'>
            <Header
                tittle={"Work Experience"}
                style={"mb-6 lg:mb-12 "}
                description={
                    "Experienced software engineer proficient in multiple languages and frameworks. Skilled in designing, implementing, and maintaining software systems. Collaborative problem-solver delivering innovative and efficient solutions."
                }
            />
            <div className='flex flex-col space-y-[25px] lg:space-y-0'>
                {works.map((work, index) => {
                    return (
                        <div key={work.company}>
                            {index !== 0 && (
                                <hr className='hidden lg:block border border-dark2 lg:mx-8' />
                            )}
                            <div className='p-8 lg:px-8 lg:py-12 bg-dark1 grid grid-cols-12'>
                                <div className='col-span-12 lg:col-span-4'>
                                    <h1 className='text-gray text-base md:text-lg font-medium mb-4 md:mb-6'>
                                        {work.position} | {work.duration}
                                    </h1>
                                    <p className='text-gray text-[12px] lg:text-sm mb-6'>
                                        {work.company} | {work.location}
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-8'>
                                    <h1 className='text-gray text-base md:text-lg font-medium mb-4 md:mb-6'>
                                        Responsibilities
                                    </h1>
                                    <ul className='text-text text-[12px] lg:text-sm list-disc '>
                                        {work.responsibilities.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className='mb-1.5'
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperience;
