module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'no-unused-vars': ['error'],
    'no-fallthrough': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'object-curly-newline': 0,
  },
};
