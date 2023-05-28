import React from "react";
import Header from "../../../Components/Header/Header";
import { blogElement } from "../../../Components/LeftMenu/Components/blogElement";
import Blog from "../../../Components/Blog/Blog";
const Blogs = () => {
    return (
        <div id={"services"} className='mt-12 md:mt-[70px]'>
            <Header
                style={"mb-6 lg:mb-12"}
                tittle={"Blogs"}
                description={`Immerse yourself in the realm of coding, algorithms, and software development practices. Stay ahead with the latest technologies, frameworks, and industry trends. Unleash your programming potential, hone your skills, and become a master in crafting innovative solutions for complex problems`}
            />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5'>
                {blogElement.map((blog, index) => {
                    return <Blog key={index} blog={blog} />;
                })}
            </div>
        </div>
    );
};

export default Blogs;
