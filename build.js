const { compile } = require('rocket-starter');

compile({
    src: './src/index',
    library: 'CustomScroll',
    dist: './dist',
    html: false
}, config => {
    config.externals = [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }]
});