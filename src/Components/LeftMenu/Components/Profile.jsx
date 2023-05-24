import React from "react";
import PersonalImage from "../../../assets/image/Selective Color 1.png";
import { Icon } from "../../Icon/Icon";
const Profile = () => {
    const links = [
        { name: "Facebook", link: "www.facebook.com" },
        { name: "Github", link: "www.facebook.com" },
        { name: "LinkedIn", link: "www.facebook.com" },
        { name: "Instagram", link: "www.facebook.com" },
        { name: "Twitter", link: "www.facebook.com" },
    ];
    return (
        <>
            <div className='relative'>
                <div className='w-[150px] h-[150px] bg-gray2 rounded-full overflow-hidden border border-yellow1 '>
                    <img
                        src={PersonalImage}
                        aria-hidden
                        alt='Personal Image'
                        className=' object-cover pt-2'
                    />
                </div>
                <div className='w-3.5 h-3.5 bg-[#7EB942] absolute z-10 bottom-5 rounded-full right-3'></div>
            </div>
            <h2 className='font-medium text-lg text-white mt-7'>
                Md. Sohan Talukder Akash
            </h2>
            <p className='mt-2 text-base text-[#5c5d5d] tracking-wide'>
                Software Engineer
            </p>
            <div className='flex flex-row space-x-3.5 mt-4'>
                {links.map((item) => {
                    return (
                        <a
                            key={item.name}
                            target='_blank'
                            rel='noreferrer'
                            href={item?.link}
                            className=' w-8 h-8 rounded-full bg-yellow1 flex justify-center items-center'
                        >
                            <Icon
                                name={item?.name}
                                className={"fill-black h-5 w-5"}
                            />
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default Profile;
