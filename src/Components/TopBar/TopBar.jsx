import React from "react";

const TopBar = ({
    handleRightMenu,
    handleLeftMenu,
    openLeftMenu,
    openRightMenu,
}) => {
    return (
        <div className='flex xl:hidden fixed top-0 w-full z-50'>
            <div className='w-full h-[70px] bg-dark1 sticky shadow-md flex items-center justify-between px-5'>
                <button className='relative' onClick={handleLeftMenu}>
                    <div className='relative z-20 flex items-center justify-center  transform transition-all  duration-200 w-[50px] h-[50px]'>
                        <div
                            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                                openLeftMenu && "-rotate-[45deg]"
                            } origin-center`}
                        >
                            <div
                                className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300  ${
                                    openLeftMenu &&
                                    "-rotate-90 -translate-y-[1px] h-[1px]"
                                } origin-right delay-75`}
                            ></div>
                            <div className='bg-white h-[1px] rounded'></div>
                            <div
                                className={`m-0 bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300  ${
                                    openLeftMenu &&
                                    "-rotate-90 h-[1px] origin-left delay-75 translate-y-[1px]"
                                } `}
                            ></div>
                        </div>
                    </div>
                </button>
                <button className='relative' onClick={handleRightMenu}>
                    <div className='relative flex overflow-hidden items-center justify-center  transform transition-all  duration-200 w-[50px] h-[50px]'>
                        <div
                            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                                openRightMenu && "-translate-x-1.5 rotate-180"
                            } `}
                        >
                            <div
                                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150 ${
                                    openRightMenu && "rotate-[42deg] w-2/3"
                                }`}
                            ></div>
                            <div
                                className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300  ${
                                    openRightMenu && "translate-x-10"
                                }`}
                            ></div>
                            <div
                                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150 ${
                                    openRightMenu && "-rotate-[42deg] w-2/3"
                                }`}
                            ></div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default TopBar;
