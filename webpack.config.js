'use strict';

module.exports = {
    entry: {
        'app': './public/Main.ts'
    },
    output: {
        filename: './develop/develop.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: { configFileName: 'develop.tsconfig.json' }
            },
        ]
    }
};
