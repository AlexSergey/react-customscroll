const fs = require('fs');
const path        = require('path');
const deepAssign  = require('deep-assign');
const customCofig = fs.existsSync('./webpack.customConfig.js') ? require('./webpack.customConfig') : {};

const root    = path.resolve(__dirname);
const src     = path.join(root, 'src');
const dest    = path.join(root, 'dist');

var config = deepAssign({}, {
    webpack: {
        devtool: 'source-map',
        hasVendors: false,
        entry: {
            customscroll: path.join(src, 'index.jsx')
        },
        output: {
            path: dest
        },
        devServer: {
            port: 8000,
            hostname: 'http://localhost'
        }
    },
    isomorphic: {
        port: 9999
    }
}, customCofig);

module.exports = config;