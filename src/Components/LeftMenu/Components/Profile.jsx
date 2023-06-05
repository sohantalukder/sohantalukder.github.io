import React from "react";
import PersonalImage from "../../../assets/image/sohan.png";
import { Icon } from "../../Icon/Icon";
import { Link } from "react-router-dom";
const Profile = () => {
    const links = [
        { name: "Facebook", link: "https://www.facebook.com/sohantalukder0/" },
        { name: "Github", link: "https://github.com/sohantalukder" },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/sohantalukder/",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/sohantalukder0/",
        },
    ];
    return (
        <div className='flex flex-col items-center'>
            <div className='relative '>
                <div className='w-[150px] h-[150px] bg-gray2 rounded-full overflow-hidden border border-yellow1 flex justify-center items-start'>
                    <img
                        src={PersonalImage}
                        aria-hidden
                        alt='Personal Image'
                        className=' object-cover pt-2 min-w-[150px] min-h-auto'
                    />
                </div>
                <div className='w-3.5 h-3.5 bg-[#7EB942] absolute z-10 bottom-5 rounded-full right-3'></div>
            </div>
            <h2 className='font-medium text-lg text-white mt-7'>
                Md. Sohan Talukder
            </h2>
            <p className='mt-2 text-base text-[#5c5d5d] tracking-wide'>
                Software Engineer
            </p>
            <div className='flex flex-row space-x-3.5 mt-4'>
                {links.map((item) => {
                    return (
                        <Link
                            target='_blank'
                            to={item?.link}
                            className=' w-8 h-8 rounded-full bg-yellow1 flex justify-center items-center'
                        >
                            <Icon
                                name={item?.name}
                                className={"fill-black h-5 w-5"}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Profile;
