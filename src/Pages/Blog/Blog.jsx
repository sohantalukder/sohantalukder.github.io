import React from "react";
import { useParams } from "react-router-dom";
import { blogElement } from "../../Components/LeftMenu/Components/blogElement";
const Blog = () => {
    const { id } = useParams() || "";
    const blog = blogElement.find((item) => item.id == id);
    const theObj = { __html: blog.description };
    return (
        <div className='px-5 lg:px-0 '>
            <h1 className='mt-[100px] xl:mt-10 text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-5'>
                {blog.name}
            </h1>
            <img src={blog.image} alt={blog.name} className='w-full h-auto' />
            <div dangerouslySetInnerHTML={theObj} className='text-text mt-10' />
        </div>
    );
};

export default Blog;
