import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
const BlogCard = ({ blog }) => {
    const { id, name, shortDesc, description, image } = blog || {};
    return (
        <div className='flex flex-col bg-dark1'>
            <img src={image} alt={name} />
            <div className='flex flex-col p-6'>
                <h1 className='text-white bg-semibold text-base md:text-lg mb-2'>
                    {name}
                </h1>
                <p className='text-text text-[12px] text-sm'>
                    {shortDesc?.slice(0, 200)}....
                </p>
                <Link
                    to={`/blog/${id}`}
                    className='mt-2 text-yellow1 text-semibold text-sm flex items-center group '
                >
                    <p>Learn More</p>{" "}
                    {
                        <BsArrowRightShort className='group-hover:ml-1.5 transition-all  text-xl' />
                    }
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
