import { Hero } from '@/lib/components';
import Layout from '@/lib/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="min-h-[100vh]">
                <Hero />
            </div>
        </Layout>
    );
};

export default Home;
