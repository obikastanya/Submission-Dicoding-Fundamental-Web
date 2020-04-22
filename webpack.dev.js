const path = require('./path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: resolve(_dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [{}]
    },
    plugins: []
}