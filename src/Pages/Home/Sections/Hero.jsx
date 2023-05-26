import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import PersonalImage from "../../../assets/image/sohan.png";
const Hero = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-dark1 flex md:gap-16 items-center md:px-[60px] px-5 py-8 md:py-0 justify-between'>
                <div className='w-full md:w-1/2 text-center md:text-left  '>
                    <div>
                        <h1 className='text-3xl md:text-5xl font-bold  text-gray '>
                            I'm Md. Sohan Talukder Akash
                        </h1>
                        <h1 className='text-3xl md:text-5xl font-bold  text-gray mt-2'>
                            <span className='text-yellow1'>Software</span>{" "}
                            Engineer
                        </h1>
                    </div>
                    <p className='text-text text-base mt-[18px]'>
                        To work in an organization with ample opportunities to
                        enhance my skills and knowledge along with contribute to
                        the growth of the organization and I prefer teamwork.
                        Eager to learn new technologies and tools. Enthusiastic
                        about doing problem-solving and developing new tools
                    </p>
                    <Link
                        to='/#asd'
                        className='inline-flex items-center gap-1.5 group bg-yellow1 text-black text-base px-8 py-4 font-medium mt-[25px] '
                    >
                        HIRE ME{" "}
                        <BsArrowRight className='group-hover:translate-x-1 transition-all' />
                    </Link>
                </div>
                <div className='hidden md:block float-right'>
                    <img
                        src={PersonalImage}
                        alt='profile_image'
                        className='max-w-[400px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
