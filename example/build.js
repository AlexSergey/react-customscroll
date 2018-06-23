const { compile } = require('rocket-starter');
const path = require('path');

compile({},
    props => {
        Object.assign(props.resolve, {
            alias: {
                'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
                'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
                react: path.resolve(__dirname, '../node_modules/react')
            }
        });
        Object.assign(props.output, {
            publicPath: './'
        });
});