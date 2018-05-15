const { compile, customize } = require('rocket-starter');
const path = require('path');

compile(customize({},
    props => {
        Object.assign(props.resolve.resolve, {
            alias: {
                'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
                'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
                react: path.resolve(__dirname, '../node_modules/react')
            }
        });
        Object.assign(props.output.output, {
            publicPath: './'
        });
    }));