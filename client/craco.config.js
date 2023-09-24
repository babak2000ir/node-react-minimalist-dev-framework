const path = require('path');

module.exports = {
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            if (env !== 'production')
                return webpackConfig;
            paths.appBuild = webpackConfig.output.path = path.resolve(__dirname, '..', 'dist/client');
            return webpackConfig;
        }
    }
};