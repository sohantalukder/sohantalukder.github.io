import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className=' mx-auto' id='home'>
            <div className=' flex flex-col-reverse xl:flex-row gap-16 xl:gap-0 mt-[100px]  items-center xl:px-[60px] px-5 py-8 xl:py-0 justify-between'>
                <div className='w-full xl:w-1/2 text-center md:text-left  '>
                    <div>
                        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-bold  text-gray '>
                            Javascript Developer (React, React Native) 👋
                        </h1>
                    </div>
                    <p className='text-text text-base mt-[18px]'>
                        I'm Md. Sohan Talukder Akash, a passionate and dedicated
                        Javascript Developer based in Dhaka, Bangladesh. With
                        expertise in JavaScript, I strive to create efficient
                        and innovative web and app solutions, constantly staying
                        up-to-date with the latest industry trends.📍
                    </p>
                    <div className='flex justify-start mt-5 gap-3'>
                        <a
                            target='_blank'
                            href='https://github.com/sohantalukder'
                            className='bg-gray px-3 py-0.5 flex items-center justify-center gap-1'
                        >
                            <AiFillGithub className='text-black text-2xl' />
                            <p>Github</p>
                        </a>
                        <a
                            target='_blank'
                            href='https://www.linkedin.com/in/sohantalukder/'
                            className='bg-gray px-3 py-0.5 flex items-center justify-center gap-1'
                        >
                            <AiFillLinkedin className='text-black text-2xl' />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div className='mt-5 flex flex-col md:flex-row justify-start items-center gap-3'>
                        <p className='text-text font-medium text-xl flex flex-col md:flex-row items-center gap-0.5 md:gap-2'>
                            <span>Tech Stack</span>
                            <span className='border w-32 md:w-0.5 h-0.5  md:h-7 bg-text'></span>
                        </p>
                        <div className='flex gap-3 items-center'>
                            <SiJavascript
                                className='text-2xl text-yellow1 cursor-pointer'
                                title='Javascript'
                            />
                            <SiNextdotjs
                                className='text-2xl text-gray cursor-pointer'
                                title='NextJs'
                            />
                            <TbBrandReactNative
                                className='text-2xl text-[#5ed4f3] cursor-pointer'
                                title='React Native'
                            />
                            <SiRedux
                                className='text-2xl text-[#7248b6] cursor-pointer'
                                title='Redux'
                            />
                            <FaNodeJs
                                className='text-2xl text-[#659b60] cursor-pointer'
                                title='NodeJs'
                            />
                            <DiMongodb
                                className='text-2xl text-[#3f9b38] cursor-pointer'
                                title='MongoDB'
                            />
                            <SiTailwindcss
                                className='text-2xl text-[#07b0ce] cursor-pointer'
                                title='Tailwind'
                            />
                        </div>
                    </div>
                </div>
                <div className='block float-right'>
                    <div className='hero-img'></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
