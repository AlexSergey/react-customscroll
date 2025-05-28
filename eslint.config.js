const {makeConfig} = require('@rockpack/codestyle');

const config = makeConfig();

config.push({
  rules: {
    '@typescript-eslint/no-unsafe-function-type': 'off',
  },
});

module.exports = config;
