const { frontendCompiler } = require('../node_modules/rocket-starter');
const path = require('path');

frontendCompiler({
        url: './'
    },
    props => {
        Object.assign(props.resolve, {
            alias: {
                'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
                'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
                react: path.resolve(__dirname, '../node_modules/react')
            }
        });
});