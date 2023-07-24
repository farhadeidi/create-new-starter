const Prettierrc = require('./.prettierrc');

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': ['error', ...Prettierrc],
  },
};
