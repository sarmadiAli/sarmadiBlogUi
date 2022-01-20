const withImages = require('next-images')
module.exports = {
    reactStrictMode: true,
    // withImages()
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}