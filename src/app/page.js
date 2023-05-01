'use client';

import Buttons from '@/components/Buttons';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
    const sm = useMediaQuery('(min-width:640px)');

    return (
        <>
            <header
                className={`sm:flex items-center justify-around h-[220px] xs:h-[292px] sm:h-[292px] w-full bg-[url('../../public/first.png')] xs:bg-[url('../../public/tablet1.png')] myxl:bg-[url('../../public/desktop1.png')]`}
            >
                {!sm && (
                    <Zoom>
                        <div className="h-8 flex justify-end items-center pr-3 xs:pt-4">
                            <ContactMe />
                        </div>
                    </Zoom>
                )}

                <div className="w-full sm:w-fit flex justify-center h-[70%] items-center">
                    <Buttons />
                </div>

                {sm && (
                    <Zoom>
                        <img src="./avatar2.png" className="h-[220px]" />
                    </Zoom>
                )}
            </header>

            <section className="h-[247px] xs:h-[345px] w-full bg-[url('../../public/second.png')] xs:bg-[url('../../public/tablet2.png')] text-white flex sm:justify-around xs:items-center pt-8 xs:pt-0 pl-7 pr-5">
                <div>
                    <Bounce left>
                        <h1 className="text-[18px] xs:text-[35px] font-bold w-[195px] xs:w-auto sm:w-[420px]">
                            Want to get your work done?
                        </h1>
                        <p className="mt-2 text-[9px] xs:text-[20px] w-[212px] xs:w-auto sm:w-[362.3px]">
                            Approach me! a passionate web developer. Design,
                            frontend and backend all the things at one place
                        </p>
                    </Bounce>
                </div>
                <Zoom>{sm && <ContactMe />}</Zoom>
            </section>

            <section
                className="w-full text-white flex flex-col items-center py-6 xs:py-12 gap-4 sm:gap-7"
                style={{
                    background: `linear-gradient(141deg, rgba(138,0,2,1) 0%, rgba(209,137,138,1) 50%, rgba(55,161,174,1) 100%)`,
                }}
            >
                <Bounce top>
                    <h1 className="font-bold text-[18px] xs:text-[35px]">
                        About Me
                    </h1>
                </Bounce>
                <Zoom>{!sm && <img src="./avatar.png" alt="avatar" />}</Zoom>
                <Bounce top>
                    <p className="text-[8px] xs:text-[20px] text-center w-[85%]">
                        Hello there, I am a skilled web developer with a passion
                        for creating beautiful and functional websites. I have
                        built a large number of projects in this field, I have
                        honed my skills in front-end and back-end development,
                        as well as in a variety of programming languages and
                        frameworks.
                        <br /> <br />
                        I'm currently pursuing Bachelor's degree in Computer
                        Science from NED University, where I developed a strong
                        understanding of software development principles and
                        gained hands-on experience working with various
                        programming languages and tools.
                        <br />
                        <br />
                        My goal is to provide my clients with top-notch websites
                        that meet their unique needs and exceed their
                        expectations. Whether it's a small business website, an
                        e-commerce platform, or a complex web application, I
                        have the expertise to bring your vision to life. I am
                        constantly seeking out new challenges and learning
                        opportunities, and I thrive on the satisfaction of
                        delivering high-quality solutions to my clients. When
                        I'm not coding, you can find me exploring new
                        technologies, reading tech blogs, or enjoying the
                        outdoors.
                    </p>
                </Bounce>
            </section>

            <Footer />
        </>
    );
}
