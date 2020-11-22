const { frontendCompiler } = require('@rockpack/compiler');
const path = require('path');

frontendCompiler({}, finalConfig => {
  finalConfig.output.publicPath = './';

  Object.assign(finalConfig.resolve, {
    alias: {
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
      'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
      react: path.resolve(__dirname, '../node_modules/react')
    }
  });
});
