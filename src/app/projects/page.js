import Projects from '@/components/Projects';
import GoBack from '@/components/GoBack';

export const metadata = {
    title: 'Projects',
    description: 'web developer portfolio projects',
};

const page = () => {
    return (
        <main className="bg-[url('../../public/Projects-Phone.png')] w-full h-full">
            <div className="h-8 flex justify-start items-center pl-3 sm:pl-5 xs:pt-4 sm:pt-6">
                <GoBack />
            </div>
            <Projects />
        </main>
    );
};

export default page;
