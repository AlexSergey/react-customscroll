const { libraryCompiler } = require('rocket-starter');

libraryCompiler('CustomScroll', {}, config => {
    config.externals = [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }]
});