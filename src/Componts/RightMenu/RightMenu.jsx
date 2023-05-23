import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/svg/Home.svg";
import { ReactComponent as ServicesIcon } from "../../assets/svg/Services.svg";
import { ReactComponent as WorkIcon } from "../../assets/svg/work.svg";
import { ReactComponent as EducationIcon } from "../../assets/svg/eduction.svg";
import { ReactComponent as BlogIcon } from "../../assets/svg/blog.svg";
import { ReactComponent as ChatIcon } from "../../assets/svg/chat.svg";
import { Link } from "react-router-dom";
const RightMenu = () => {
    return (
        <div className='w-[138px] h-screen  fixed right-0 bg-gray shadow1 flex flex-col items-center justify-center'>
            <div className='flex flex-col space-y-10'>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Home
                    </div>
                    <HomeIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Services
                    </div>
                    <ServicesIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Experience
                    </div>
                    <WorkIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Education
                    </div>
                    <EducationIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Blog
                    </div>
                    <BlogIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
                <Link
                    data-tooltip-target='tooltip-default'
                    ata-tooltip-trigger='hover'
                    className=' h-10 w-10  bg-light_background group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                >
                    <div className='absolute transition-opacity duration-300 shadow-sm -top-10 opacity-0 group-hover:opacity-100 bg-black text-white px-4 py-1.5 rounded-sm'>
                        Hire
                    </div>
                    <ChatIcon className='fill-text group-hover:fill-dark1 transition-all' />
                </Link>
            </div>
        </div>
    );
};

export default RightMenu;
