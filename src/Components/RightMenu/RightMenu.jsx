import React from "react";
import { ReactComponent as DownArrow } from "../../assets/svg/downward-arrow.svg";
import { HashLink } from "react-router-hash-link";
import { elements } from "./Elements";
import { Icon } from "../Icon/Icon";
const RightMenu = ({ openRightMenu }) => {
    return (
        <div className='flex relative'>
            <div
                className={` ${
                    openRightMenu
                        ? "fixed top-[70px] flex xl:hidden"
                        : "sticky top-0 hidden xl:flex"
                }  right-0 bg-dark1 shadow1  h-screen  min-w-[108px] flex-col items-center justify-center`}
            >
                <div className='flex flex-col space-y-10'>
                    {elements.map((menu) => {
                        return (
                            <HashLink
                                key={menu.id}
                                to={`/#${menu.name.toLowerCase()}`}
                                className=' h-10 w-10  bg-text group flex justify-center items-center rounded-full hover:bg-yellow1 transition-all relative'
                            >
                                <div className='absolute transition-opacity shadow-sm -top-9 opacity-0 group-hover:opacity-100 bg-light_background text-dark2 text-[12px] font-medium tracking-wide px-3 py-1 rounded-sm duration-150 ease-in-out'>
                                    <p>{menu.name}</p>
                                    <DownArrow className='absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 fill-light_background' />
                                </div>
                                <Icon
                                    name={menu.icon}
                                    className='fill-dark2 group-hover:fill-dark1 transition-all'
                                />
                            </HashLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RightMenu;
