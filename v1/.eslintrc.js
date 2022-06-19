module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: 'tsconfig.json',
  },
  settings: {
    'import/extensions': ['.ts', '.js', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
    ignorePackages: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never', tsx: 'never' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error', { allowArgumentsExplicitlyTypedAsAny: true }],
    '@typescript-eslint/no-empty-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    camelcase: 0,
  },
};
