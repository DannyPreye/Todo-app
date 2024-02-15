import React from "react";

const Pro: React.FC = () => {
    return (
        <div className='bg-primary-green border-2 border-t-0 border-[#9EB031] shadow-md text-primary-blue px-[23.84px] items-start gap-[23.05px] flex'>
            <div className='pt-[36px] pb-[39.11px] h-full flex items-center gap-[24.97px]'>
                <img src='/cup.png' alt='pro' />
                <p className='text-[18px] font-[700] leading-[19.05px]'>
                    Go Pro Upgrade Now
                </p>
            </div>
            <div className='bg-primary-blue w-[66.11px]  h-[71px] text-primary-green grid place-items-center'>
                $1
            </div>
        </div>
    );
};

export default Pro;
