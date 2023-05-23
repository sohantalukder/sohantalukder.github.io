import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/svg/Home.svg";
import { ReactComponent as ServicesIcon } from "../../assets/svg/Services.svg";
import { ReactComponent as WorkIcon } from "../../assets/svg/work.svg";
import { ReactComponent as EducationIcon } from "../../assets/svg/eduction.svg";
import { ReactComponent as BlogIcon } from "../../assets/svg/blog.svg";
import { ReactComponent as ChatIcon } from "../../assets/svg/chat.svg";
import { ReactComponent as DownArrow } from "../../assets/svg/downward-arrow.svg";
import { HashLink } from "react-router-hash-link";
const RightMenu = () => {
    return (
        <div className='w-[138px] h-screen  fixed right-0 bg-dark1 shadow1 flex flex-col items-center justify-center'>
            <div className='flex flex-col space-y-10'>
                <HashLink
                    to='/#home'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Home</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <HomeIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
                <HashLink
                    to='/#services'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Services</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <ServicesIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
                <HashLink
                    to='/#experience'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Experience</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <WorkIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
                <HashLink
                    to='/#education'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Education</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <EducationIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
                <HashLink
                    to='/#blog'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Blog</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <BlogIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
                <HashLink
                    to='/#hire'
                    className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                        <p>Hire</p>
                        <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                    </div>
                    <ChatIcon className='fill-dark2 group-hover:fill-dark1 transition-all' />
                </HashLink>
            </div>
        </div>
    );
};

export default RightMenu;
