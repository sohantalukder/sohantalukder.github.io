import React from "react";
import Profile from "./Components/Profile";
import PersonalInfo from "./Components/PersonalInfo";
import FrontendSkills from "./Components/FrontendSkills";
import BackendSkills from "./Components/BackendSkills";
import ExtraSkills from "./Components/ExtraSkills";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
const LeftMenu = () => {
    return (
        <div className=' left-0 bg-dark1 shadow1 h-100vh col-span-2 sticky min-w-[305px] px-10 pb-4'>
            <div className='pt-8 lg:mt-10 flex flex-col '>
                <Profile />
                <hr className='border border-dark2 w-full my-8' />
                <PersonalInfo />
                <hr className='border border-dark2 w-full my-8' />
                <FrontendSkills />
                <hr className='border border-dark2 w-full my-8' />
                <BackendSkills />
                <hr className='border border-dark2 w-full my-8' />
                <ExtraSkills />
                <hr className='border border-dark2 w-full my-8' />
                <Link
                    to='https://drive.google.com/file/d/1TuQT8jSbPOTRbxJvGDKUD-U7gRkIBVcY/view?usp=share_link'
                    download
                    target='_blank'
                    className='flex items-center space-x-5 py-2.5 px-10 bg-yellow1 justify-center'
                >
                    <p className='uppercase text-sm font-semibold'>
                        Download CV
                    </p>
                    <Icon name='Download' />
                </Link>
            </div>
        </div>
    );
};

export default LeftMenu;
