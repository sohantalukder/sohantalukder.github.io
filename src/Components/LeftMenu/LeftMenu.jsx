import React from "react";
import Profile from "./Components/Profile";
import PersonalInfo from "./Components/PersonalInfo";
import FrontendSkills from "./Components/FrontendSkills";
const LeftMenu = () => {
    return (
        <div className=' left-0 bg-dark1 shadow1 h-100vh col-span-2 sticky max-w-[305px] px-10'>
            <div className='pt-8 lg:mt-10 flex flex-col '>
                <Profile />
                <hr className='border border-dark2 w-full my-8' />
                <PersonalInfo />
                <hr className='border border-dark2 w-full my-8' />
                <FrontendSkills />
                <hr className='border border-dark2 w-full my-8' />
            </div>
        </div>
    );
};

export default LeftMenu;
