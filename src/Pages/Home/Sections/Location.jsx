import React from "react";

const Location = () => {
    return (
        <div className='mt-12 lg:mt-16'>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58409.02212434563!2d90.36542959999998!3d23.798539599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1685129026932!5m2!1sen!2sbd'
                width='100%'
                height='300'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    );
};

export default Location;
