const { compile, customize } = require('rocket-starter');

compile(customize({
    src: './src/index',
    library: 'CustomScroll',
    dist: './dist'
}, {
    post: config => {
        config.externals = [{
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }]
    }
}));