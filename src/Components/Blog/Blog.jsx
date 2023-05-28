import React from "react";

const Blog = ({ blog }) => {
    const { id, name, shortDesc, description, image } = blog || {};
    return (
        <div className='flex flex-col'>
            <img src={image} alt={name} />
        </div>
    );
};

export default Blog;
