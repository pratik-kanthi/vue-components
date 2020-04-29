const path = require('path');
module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png' }]
    ],
    title: 'Vu[e9] Components',
    description: 'A list of e9ine vue components.',
    themeConfig: {
        logo: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'http://e9ine.com' }
        ],
        sidebar: 'auto'
    }
};