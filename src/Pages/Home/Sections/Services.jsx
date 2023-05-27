import React from "react";
import Header from "../../../Components/Header/Header";
import { Icon } from "../../../Components/Icon/Icon";

const Services = () => {
    const services = [
        {
            name: "Web Development",
            icon: "Web",
            description:
                "Grasp the Science of Developing Dynamic Websites and Web-Based Applications to Harness the Potential of Web Development",
        },
        {
            name: "App Development",
            icon: "App",
            description:
                "Harness the Power of App Development to Create Seamless and Impactful Applications",
        },
        {
            name: "Design",
            icon: "Design",
            description:
                "Create Striking Visual Solutions that Captivate, Engage, and Inspire",
        },
    ];
    return (
        <div id={"services"} className='mt-12 md:mt-[70px]'>
            <Header
                style={"mb-6 lg:mb-12"}
                tittle={"My Services"}
                description={`Experienced developer crafting seamless user experiences, elegant designs, and efficient functionality for web, mobile, and software solutions. Let's collaborate to bring your ideas to life and exceed expectations.`}
            />
            <div className='grid grid-cols-12  gap-4 md:gap-5'>
                {services.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className='bg-dark1 p-6 md:p-8 flex flex-col items-center justify-center col-span-12 md:col-span-3'
                        >
                            <Icon name={service.icon} />
                            <h2 className='mt-6 text-white text-lg font-medium text-center'>
                                {service.name}
                            </h2>
                            <p className='text-text text-sm md:text-base mt-4 text-center'>
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
