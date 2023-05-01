'use client';

import { Cookie } from 'next/font/google';
import Link from 'next/link';

const cookie = Cookie({ subsets: ['latin'], weight: '400' });

const Buttons = () => {
    return (
        <div className="flex flex-col gap-2">
            <Link
                href="/projects"
                style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.22)' }}
                className={`bounce-in w-[90px] xs:w-[159px] h-[25px] xs:h-[54px] text-center text-[19px] xs:text-[36px] rounded-[20px] xs:rounded-[27px] transition-all bg-[#ff60ec] hover:bg-[#ff2de6] hover:scale-105 ${cookie.className}`}
            >
                Projects
            </Link>

            <Link
                href="/services"
                style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.22)' }}
                className={`bounce-in w-[90px] xs:w-[159px] h-[25px] xs:h-[54px] text-center text-[19px] xs:text-[36px] rounded-[20px] xs:rounded-[27px] transition-all bg-[#F5EA5A] hover:bg-[#fff12c] hover:scale-105 ${cookie.className}`}
            >
                Services
            </Link>
        </div>
    );
};

export default Buttons;
