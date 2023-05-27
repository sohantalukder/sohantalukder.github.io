import React from "react";
import { Icon } from "../Icon/Icon";

const CopyRight = () => {
    return (
        <div className='py-4 flex justify-center bg-dark1 mt-12 lg:mt-16 space-x-3 items-center md:space-x-5 text-center'>
            <Icon name={"Copy"} className='fill-white' />
            <p className='text-white text-center'>
                2023 ALl Rights Reserved. Sohan Talukder
            </p>
        </div>
    );
};

export default CopyRight;
