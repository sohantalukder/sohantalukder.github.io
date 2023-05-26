import React from "react";

const TopBar = () => {
    return (
        <div className='flex lg:hidden col-span-12'>
            <div className='w-full h-[70px] bg-dark1 sticky shadow-md flex items-center justify-between px-6'>
                <button className='relative group'>
                    <div className='relative z-20 flex items-center justify-center  w-[50px] h-[50px] transform transition-all  duration-200 '>
                        <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center'>
                            <div className='bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]'></div>
                            <div className='bg-white h-[1px] rounded'></div>
                            <div className='m-0 bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]'></div>
                        </div>
                    </div>
                </button>
                <button className='relative group'>
                    <div className='relative flex overflow-hidden items-center justify-center  w-[50px] h-[50px] transform transition-all  duration-200 '>
                        <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180'>
                            <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150'></div>
                            <div className='bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10'></div>
                            <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150'></div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TopBar;
