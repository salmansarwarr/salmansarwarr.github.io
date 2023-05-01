'use client';

import Project from '@/components/Project';
import GoBack from '@/components/GoBack';
import SearchBar from '@/components/SearchBar';
import { projects } from '@/data/projects';
import { useState } from 'react';


const page = () => {
    const reversedProjects = [...projects].reverse();
    const [tech, setTech] = useState('');

    return (
        <main className="bg-[url('../../public/Projects-Phone.png')] w-full h-full">
            <div className="h-8 flex justify-start items-center pl-3 sm:pl-5 xs:pt-4 sm:pt-6">
                <GoBack />
            </div>
            <div className="w-full flex justify-center my-8 sm:my-10">
                <SearchBar tech={tech} setTech={setTech} />
            </div>
            <div className="w-full mt-4 md:px-6 lg:px-8 grid justify-center place-items-center items-center gap-5 md:gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
                {reversedProjects.map((proj) =>
                    tech === '' ? (
                        <Project
                            key={proj.id}
                            title={proj.title}
                            image={proj.image}
                            tags={proj.tags}
                            link={proj.link}
                        />
                    ) : (
                        proj.tags.includes(tech) && (
                            <Project
                                key={proj.id}
                                title={proj.title}
                                image={proj.image}
                                tags={proj.tags}
                                link={proj.link}
                            />
                        )
                    )
                )}
            </div>
        </main>
    );
};

export default page;
