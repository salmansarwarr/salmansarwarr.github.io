'use client'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';

const GoBack = () => {
    return (
        <Link
            href="/"
            className="underline font-semibold text-[9px] xs:text-[12px] sm:text-[15px] text-white flex items-center w-[60px] xs:w-[72px] sm:w-[85px] justify-between"
        >
            <KeyboardBackspaceIcon fontSize='small'/> Go Back 
        </Link>
    );
};

export default GoBack;
