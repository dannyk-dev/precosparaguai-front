import { Hero } from '@/lib/components';
import Layout from '@/lib/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Home;
