import React from "react";
import Profile from "./Components/Profile";
import PersonalInfo from "./Components/PersonalInfo";
import FrontendSkills from "./Components/FrontendSkills";
import BackendSkills from "./Components/BackendSkills";
import ExtraSkills from "./Components/ExtraSkills";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
const LeftMenu = ({ openLeftMenu }) => {
    return (
        <div className='flex  relative'>
            <div
                className={` left-0 ${
                    openLeftMenu
                        ? "block xl:hidden !top-[70px] !absolute"
                        : "hidden xl:block "
                } bg-dark1 top-0 shadow1 duration-300 ease-out transition-all  col-span-2 min-w-[305px] sticky  px-10 pb-4`}
            >
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
        </div>
    );
};

export default LeftMenu;
