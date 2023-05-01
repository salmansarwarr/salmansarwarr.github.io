'use client'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const sm = useMediaQuery('(min-width:640px)');

    return (
        <footer
            id="contact"
            className="h-[38px] sm:h-[78.02px] w-full bg-[#F5EA5A] flex gap-1 items-center justify-between px-3 md:px-11 lg:px-16 xl:px-24"
        >
            <Link
                className="flex items-center gap-1"
                href="mailto:muhammadsalmansarwar32@gmail.com"
                target="_blank"
            >
                <MailOutlineIcon fontSize={sm ? 'large': 'medium'} className="w-[13px] xs:w-[18px] sm:w-[30.55px]"/>
                <p className="font-semibold text-[8px] xs:text-[10px] sm:text-[20px]">
                    muhammadsalmansarwar32@gmail.com
                </p>
            </Link>
            <div className="flex gap-1">
                <Link href="https://github.com/salmansarwarr" target="_blank">
                    <GitHubIcon fontSize={sm ? 'large': 'medium'} className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/-salmansarwar/"
                    target="_blank"
                >
                    <LinkedInIcon fontSize={sm ? 'large': 'medium'} className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]" />
                </Link>
                <Link href="http://wa.me/3150259301" target="_blank">
                    <WhatsAppIcon fontSize={sm ? 'large': 'medium'} className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
