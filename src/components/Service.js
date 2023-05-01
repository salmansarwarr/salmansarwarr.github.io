'use client';

import Image from 'next/image';

const Service = ({ title, image, desc }) => {
    return (
        <div className="bg-[#303030] box px-4 gap-1 sm:py-3 py-2 flex items-center text-white w-[280px] sm:w-[500px] lg:w-[470px] rounded-[12px] hover:scale-105 cursor-default transition-all sm:rounded-[14px]">
            <Image src={image} alt={title} className="h-[50px] w-[50px]" />
            <div>
                <h1 className="text-[22px] font-semibold">{title}</h1>
                <p className="text-[15px]">{desc}</p>
            </div>
        </div>
    );
};

export default Service;
