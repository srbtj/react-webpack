//import webpack from 'webpack';
module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bin/index.js'
    },
    devtool : 'source-map',
    module : {
        loaders : [
            {
                test : /\.jsx|\.js$/,
                loader : 'babel-loader',
                query : {
                    presets : ["es2015","react"]
                }
            }
        ]
    }
};