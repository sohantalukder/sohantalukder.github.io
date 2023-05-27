import React from "react";
import Header from "../../../Components/Header/Header";
import { Icon } from "../../../Components/Icon/Icon";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "../../../Components/Spinner/Spinner";
const GetInTouch = () => {
    const initialState = { name: "", email: "", subject: "", message: "" };
    const errorState = {
        name: false,
        email: false,
        subject: false,
        message: false,
    };
    const infos = [
        {
            name: "Address",
            icon: "Address",
            details: ["Mirpur, Dhaka"],
        },
        {
            name: "Contact Number",
            icon: "Phone",
            details: ["+8801865748726", "+88015744183"],
        },
        {
            name: "Email",
            icon: "Email",
            details: ["mdtalukder.sohan@gmail.com", "sohan15-1933@gmail.com"],
        },
    ];
    const [fromData, setFormData] = useState(initialState);
    const [error, setError] = useState(errorState);
    const handleOnchange = (value, name) => {
        setFormData({ ...fromData, [name]: value });
    };
    const handleError = () => {
        const { name, email, subject, message } = fromData;
        setError({
            ...error,
            name: !name,
            email: !email,
            subject: !subject,
            message: !message,
        });
    };
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = fromData;
        if (name && email && subject && message) {
            setLoading(true);
            emailjs
                .send(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_KEY,
                    fromData,
                    process.env.REACT_APP_PUBLIC_API_KEY
                )
                .then(
                    (response) => {
                        setFormData(initialState);
                        setLoading(false);
                    },
                    (err) => {
                        setLoading(false);
                        console.log("FAILED...", err);
                    }
                );
            return;
        }
        handleError();
    };
    return (
        <div id='hire' className='mt-12 md:mt-[70px]'>
            <Header
                tittle={"Get In Touch"}
                style={"mb-6 lg:mb-12"}
                message={`Connect now to unlock limitless possibilities. Our team is eager to assist you with queries, support, and partnership opportunities. Reach us via phone, email, or our website. Let's chat and create greatness together!`}
            />
            <div className='grid grid-cols-12 gap-5 lg:gap-7 items-start'>
                <div className='col-span-12 lg:col-span-7 bg-dark1 p-[5%]'>
                    <h1 className='text-gray text-lg font-medium'>
                        Say Something
                    </h1>
                    <form onSubmit={handleSubmit} className='mt-5'>
                        <div className='grid grid-cols-12 gap-5 mb-5'>
                            <input
                                type='text'
                                className={`w-full bg-transparent outline-none border-b border-text hover:border-yellow1 transform transition-all hover:outline-none text-gray  py-1 col-span-12 md:col-span-6 ${
                                    error.name &&
                                    !fromData.name &&
                                    "border-red-600 hover:border-red-600"
                                }`}
                                placeholder='Name *'
                                required
                                onChange={(text) =>
                                    handleOnchange(text.target.value, "name")
                                }
                                value={fromData.name}
                            />

                            <input
                                type='email'
                                required
                                className={`w-full bg-transparent outline-none border-b border-text hover:border-yellow1 transform transition-all hover:outline-none text-gray  py-1 col-span-12 md:col-span-6 ${
                                    error.email &&
                                    !fromData.email &&
                                    "border-red-600 hover:border-red-600"
                                }`}
                                placeholder='Email *'
                                onChange={(text) =>
                                    handleOnchange(text.target.value, "email")
                                }
                                value={fromData.email}
                            />
                        </div>
                        <input
                            type='text'
                            className={`w-full bg-transparent outline-none border-b border-text hover:border-yellow1 transform transition-all hover:outline-none text-gray py-1 mb-5 ${
                                error.subject &&
                                !fromData.subject &&
                                "border-red-600 hover:border-red-600"
                            }`}
                            placeholder='Subject *'
                            required
                            onChange={(text) =>
                                handleOnchange(text.target.value, "subject")
                            }
                            value={fromData.subject}
                        />
                        <input
                            type='text'
                            re
                            className={`w-full bg-transparent outline-none border-b border-text hover:border-yellow1 transform transition-all hover:outline-none text-gray py-1 mb-5 ${
                                error.subject &&
                                !fromData.subject &&
                                "border-red-600 hover:border-red-600"
                            }`}
                            placeholder='message *'
                            required
                            onChange={(text) =>
                                handleOnchange(text.target.value, "message")
                            }
                            value={fromData.message}
                        />
                        <button
                            type='submit'
                            className='h-10 mt-3 w-[150px] flex justify-center items-center border-[2px] border-transparent text-sm transform transaction-all text-center bg-yellow1 font-medium'
                        >
                            {loading ? <Spinner /> : "Send Message"}
                        </button>
                    </form>
                </div>
                <div className='col-span-12 lg:col-span-5 flex flex-col space-y-5'>
                    {infos.map((info, index) => {
                        return (
                            <div
                                key={index}
                                className='flex space-x-5 p-5  bg-dark1'
                            >
                                <div className='w-10 h-10 flex justify-center items-center bg-yellow1 rounded-full'>
                                    <Icon name={info.icon} />
                                </div>
                                <div>
                                    <h3 className='text-gray mb-2 font-medium text-sm '>
                                        {info.name}
                                    </h3>
                                    {info.details.map((item, index) => {
                                        return (
                                            <p
                                                key={index}
                                                className='text-sm text-text'
                                            >
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
