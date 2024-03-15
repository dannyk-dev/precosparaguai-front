import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/lib/pages/home'), {
    ssr: false,
});

export default Home;
