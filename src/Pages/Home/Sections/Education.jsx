import React from "react";
import Header from "../../../Components/Header/Header";

const Education = () => {
    const educations = [
        {
            course: "B.Sc in Computer Science & Engineering",
            cgpa: "3.56",
            institute: "Daffodil International University",
            duration: "2018 - 2022",
            description: `BSc in Computer Science and Engineering accomplished with a strong work ethic. Proficiency in programming, algorithms, and software development. Enthusiastic about leveraging expertise to contribute effectively and make a significant impact in the field.`,
        },
        {
            course: "Higher Secondary Certificate",
            gpa: "4.92",
            institute: "Milestone College",
            duration: "2015 - 2017",
            description: `HSC in Science achieved, showcasing a strong commitment to studies. Proficient in scientific principles, with a solid foundation in diverse disciplines. Eager to apply knowledge and make valuable contributions in the field of science.`,
        },
        {
            course: "Secondary School Certificate",
            gpa: "5.00",
            institute: "Digulia S. M. R. High School",
            duration: "2013 - 2015",
            description: `SSC in Science, showcasing dedication to academic pursuits. Proficient in scientific principles and concepts, I possess a strong foundation across various scientific disciplines. I am eager to apply my knowledge and contribute meaningfully in the field of science.`,
        },
    ];
    return (
        <div className='mt-12 md:mt-[70px]' id='education'>
            <Header
                tittle={"Education"}
                style={"mb-6 lg:mb-12"}
                description={
                    "A Transformative Journey of Knowledge Acquisition, Skill Development, and Personal Growth, Fostering a Lifelong Passion for Learning and Empowering Success in a Dynamic World."
                }
            />
            <div className='flex flex-col space-y-[25px] lg:space-y-0'>
                {educations.map((education, index) => {
                    return (
                        <div key={education.course}>
                            {index !== 0 && (
                                <hr className='hidden lg:block border border-dark2 lg:mx-8' />
                            )}
                            <div className='p-8 lg:px-8 lg:py-12 bg-dark1 grid grid-cols-12'>
                                <div className='col-span-12 lg:col-span-4'>
                                    <h1 className='text-gray text-base md:text-lg font-medium mb-4 md:mb-6'>
                                        {education.course}
                                    </h1>
                                    <p className='text-gray text-[12px] lg:text-sm mb-6'>
                                        {education?.cpga ? "CGPA" : "GPA"}:
                                        <span className='text-dark1 bg-yellow1 px-1.5 py-1 ml-4 tracking-wider'>
                                            {education.cgpa
                                                ? education?.cgpa
                                                : education.gpa}
                                        </span>
                                    </p>
                                </div>
                                <div className='col-span-12 lg:col-span-8'>
                                    <h1 className='text-gray text-base md:text-lg font-medium mb-4 md:mb-6'>
                                        {education.institute} (
                                        {education.duration})
                                    </h1>
                                    <p className='text-text text-[12px] lg:text-sm'>
                                        {education.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;
