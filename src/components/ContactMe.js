'use client'

import { useMediaQuery } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Link from 'next/link';

const ContactMe = () => {
    const sm = useMediaQuery('(min-width:640px)');
    const xs = useMediaQuery('(min-width:321px)');
    return (
        <Link
            href="#contact"
            className="underline font-semibold text-[7px] xs:text-[12px] sm:text-[20px] text-white sm:text-[#F5EA5A] flex items-center w-[62px] xs:w-[100px] sm:w-[155px] justify-between"
        >
            Contact Me <ArrowRightAltIcon fontSize={!sm ? (!xs ? 'small' : 'medium') : 'large'}/>
        </Link>
    );
};

export default ContactMe;
