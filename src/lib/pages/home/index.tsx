import { Hero } from '@/lib/components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
            <Hero />
        </div>
    );
};

export default Home;
