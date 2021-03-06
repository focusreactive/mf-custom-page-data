const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  extends: [
    require.resolve('@contentful/eslint-config-extension'),
    require.resolve('@contentful/eslint-config-extension/jest'),
    require.resolve('@contentful/eslint-config-extension/jsx-a11y'),
    require.resolve('@contentful/eslint-config-extension/react')
  ],
  rules: {
    'react/prop-types': ignore
  }
};
