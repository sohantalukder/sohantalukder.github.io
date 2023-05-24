import React from "react";
import Profile from "./Components/Profile";
const LeftMenu = () => {
    return (
        <div className=' left-0 bg-dark1 shadow1 h-100vh col-span-2 sticky '>
            <div className='pt-8 lg:mt-10 flex flex-col items-center'>
                <Profile />
                <hr />
            </div>
        </div>
    );
};

export default LeftMenu;
