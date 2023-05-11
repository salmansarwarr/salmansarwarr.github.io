'use client';

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
            className="h-[38px] sm:h-[78.02px] w-full bg-[#F5EA5A] flex gap-1 items-center justify-center px-3 md:px-11 lg:px-16 xl:px-24"
        >
            <div className="flex w-[50%] justify-around">
                <Link href="mailto:muhammadsalmansarwar32@gmail.com" target="_blank">
                    <MailOutlineIcon
                        fontSize={sm ? 'large' : 'medium'}
                        className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]"
                    />
                </Link>
                <Link href="https://github.com/salmansarwarr" target="_blank">
                    <GitHubIcon
                        fontSize={sm ? 'large' : 'medium'}
                        className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]"
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/-salmansarwar/"
                    target="_blank"
                >
                    <LinkedInIcon
                        fontSize={sm ? 'large' : 'medium'}
                        className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]"
                    />
                </Link>
                <Link href="http://wa.me/3150259301" target="_blank">
                    <WhatsAppIcon
                        fontSize={sm ? 'large' : 'medium'}
                        className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]"
                    />
                </Link>
                <Link href="https://drive.google.com/file/d/10OMGq78jcXn73PaCqpvgBS3Sn_hNbIiN/view" target="_blank">
                    <img
                        src='./cv.png'
                        className="w-[19.28px] sm:w-auto sm:h-[40px] xs:h-[22px] h-[19.17px]"
                    />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
