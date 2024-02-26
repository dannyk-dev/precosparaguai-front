import { Hero } from '@/lib/components';
import Layout from '@/lib/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
                <Hero />
            </div>
        </Layout>
    );
};

export default Home;
