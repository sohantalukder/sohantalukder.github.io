import React from "react";

const Header = ({ tittle, description, style }) => {
    return (
        <div className={`flex flex-col items-center ${style}`}>
            <h2 className='text-center font-bold text-xl md:text-2xl text-gray lg:text-3xl mb-8'>
                {tittle}
            </h2>
            <p className='max-w-[500px] text-base text-text text-center'>
                {description}
            </p>
        </div>
    );
};

export default Header;
