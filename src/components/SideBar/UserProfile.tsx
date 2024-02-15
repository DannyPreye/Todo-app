import React from "react";

const UserProfile: React.FC = () => {
    return (
        <div className='w-full h-[123px] pt-[19px] pb-[20px] px-[32px] bg-primary-blue shadow-md flex items-start gap-[21px]'>
            <div className='w-[50px] h-[50px] flex-shrink-0 rounded-full overflow-hidden'>
                <img
                    src='/man-pics.png'
                    className='w-full h-full object-cover'
                    alt='jhon'
                />
            </div>
            <div className='flex gap-[8px] flex-col'>
                <p className='font-[500] text-[16px] leading-[18.75px] text-white'>
                    Hello, Jhon{" "}
                </p>
                <p className='text-[25px] text-white leading-[24.46px] italic font-thin'>
                    What are your plans for today?
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
