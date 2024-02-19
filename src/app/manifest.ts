import { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
    short_name: 'preços_paraguai',
    name: 'Preços no Paraguai',
    lang: 'pt-BR',
    start_url: '/app',
    background_color: '#FFFFFF',
    theme_color: '#4CAF50',
    dir: 'ltr',
    display: 'standalone',
    prefer_related_applications: false,

    // icons: [
    //   {
    //     src: '/custom-icon.png',
    //     purpose: 'any',
    //     sizes: '48x48 72x72 96x96 128x128 256x256',
    //   },
    // ],
});

export default manifest;
