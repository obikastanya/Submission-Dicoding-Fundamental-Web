const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }],
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                use:
                {
                    loader: 'file-loader'
                }
            },
        ]
    }
}