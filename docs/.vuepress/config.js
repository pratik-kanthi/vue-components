require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png' }],
        ['script', {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}]
    ],
    title: 'Vu[e9] Components',
    description: 'A list of e9ine vue components.',
    themeConfig: {
        logo: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png',
        nav: [
            { text: 'Components', link: '/components/' },
            { text: 'Views', link: '/views/' },
            { text: 'Theming', link: '/theming/' },
            { text: 'Utilities', link: '/utilities/' },
            { text: 'e9ine', link: 'https://e9ine.com' }
        ],
        sidebar: 'auto'
    },
    configureWebpack: (config) => {
        return { plugins: [
                new webpack.EnvironmentPlugin({ ...process.env })
            ]}
    }
};