module.exports = {
    lintOnSave: true,
    configureWebpack: {
        devtool: 'eval'
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/scss/_variables.scss";',
                sourceMap: true,
            },
           
        }
    },
};
