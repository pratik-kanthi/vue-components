require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
module.exports = {
    head: [
        ['link', {rel: 'icon', href: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png'}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}],
        ['script', {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}]
    ],
    title: 'Vu[e9] Components',
    description: 'A list of e9ine vue components.',
    themeConfig: {
        logo: 'https://htmlsigs.s3.amazonaws.com/logos/files/001/087/329/landscape/e9ineLogo.png',
        nav: [
            {text: 'Getting Started', link: '/getting-started/'},
            {text: 'Components', link: '/components/'},
            {text: 'Views', link: '/views/'},
            {text: 'Theming', link: '/theming/'},
            {text: 'Utilities', link: '/utilities/'},
            {text: 'Vue Form Plugin', link: 'https://vue9-form-plugin.netlify.app/'},
            {text: 'e9', link: 'https://e9.co.uk'}
        ],
        sidebar: 'auto',
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'e9-devops/vue-components',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'GitHub',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'e9-devops/vue-components',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    },
    plugins: ['@vuepress/last-updated', '@vuepress/back-to-top'],
    configureWebpack: (config) => {
        return {
            plugins: [new webpack.EnvironmentPlugin({...process.env})],
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../../src'),
                    '@e9ine/vue_components/src/assets': path.resolve(__dirname, '../../src/assets')
                }
            }
        };
    }
};
