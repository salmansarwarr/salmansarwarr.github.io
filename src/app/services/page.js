import GoBack from '@/components/GoBack';
import Service from '@/components/Service';
import { services } from '@/data/services';

export const metadata = {
    title: 'Services',
    description: 'web developer portfolio services',
};

const page = () => {
    const reversedServices = [...services].reverse();

    return (
        <main className="bg-[url('../../public/Projects-Phone.png')] w-full h-full">
            <div className="h-8 flex justify-start items-center xs:items-start pl-3 sm:pl-5 xs:pt-4 sm:pt-6 xs:h-14 md:h-20">
                <GoBack />
            </div>
            <div className="w-full mt-4 md:mt-6 md:px-6 lg:px-8 grid justify-center place-items-center items-center gap-5 md:gap-7 lg:grid-cols-2 pb-10">
                {reversedServices.map((service) => (
                    <Service
                        key={service.id}
                        title={service.title}
                        image={service.image}
                        desc={service.desc}
                    />
                ))}
            </div>
        </main>
    );
};

export default page;
