'use client';

import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

const Project = ({ title, image, tags, link }) => {
    return (
            <div className="w-[280px] box bg-[#303030] text-white rounded-[11px] hover:scale-105 transition-all">
                <Image
                    src={image}
                    alt="fakeShop"
                    className="w-full h-[130px] rounded-t-[11px]"
                />
                <div className="border border-white mt-1"></div>
                <div className="flex flex-col gap-2 px-3 py-4 pb-5">
                    <h1 className="text-[22px] font-semibold">{title}</h1>
                    <p className="text-[15px]">
                        {tags.map((tag, i) =>
                            i !== tags.length - 1 ? `${tag} | ` : `${tag}`
                        )}
                    </p>
                    <Link
                        href={link}
                        target='_blank'
                        className="bg-white mt-4 px-3 py-1 flex gap-1 w-fit text-black w-[73px]text-[13px] rounded-[5px]"
                    >
                        <p className="font-semibold">Visit</p>
                        <ArrowRightAltIcon color="inherit" />
                    </Link>
                </div>
            </div>
    );
};

export default Project;
