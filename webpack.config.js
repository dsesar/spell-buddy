var webpack = require('webpack');
module.exports = {
    entry: "./app.js",
    target: 'atom',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ],
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
};
