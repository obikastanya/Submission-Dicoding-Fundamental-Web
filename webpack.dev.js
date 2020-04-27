const common = require('./webpack.common');
const merge = require('webpack-merge');
const { DuplicateReporterPlugin } = require("duplicate-dependencies-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{}]
    },
    plugins: [
        new DuplicateReporterPlugin(),
    ]
})