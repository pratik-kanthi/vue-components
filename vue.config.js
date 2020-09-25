const path = require('path');

module.exports = {
    lintOnSave: true,
    configureWebpack: {
        devtool: 'eval',
        resolve: {
            alias: {
                '@e9ine/vue_components/src/assets': path.resolve(__dirname, 'src/assets')
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/scss/_variables.scss";',
                sourceMap: true
            }
        }
    }
};
