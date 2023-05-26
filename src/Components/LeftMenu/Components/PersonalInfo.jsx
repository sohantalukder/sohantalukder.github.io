import React from "react";

const PersonalInfo = () => {
    const infos = [
        { name: "Age", value: 24 },
        { name: "Residence", value: "BD" },
        { name: "Freelance", value: "Available" },
        { name: "Address", value: "Mirpur, Dhaka" },
    ];
    return (
        <div className='w-full flex flex-col space-y-2.5'>
            {infos.map((item) => {
                return (
                    <div
                        key={item?.name}
                        className='flex justify-between items-center'
                    >
                        <p className='py-1 px-1.5 bg-yellow1 tracking-wider'>
                            {item?.name}:
                        </p>
                        <p
                            className={`text-white font-medium ${
                                item?.value === "Available" && "text-[#7eb942]"
                            }`}
                        >
                            {item?.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default PersonalInfo;
