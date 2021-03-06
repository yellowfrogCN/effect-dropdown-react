module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb',
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'jsx-a11y/click-events-have-key-events': 0,
    'import/prefer-default-export': 0,
    'space-before-function-paren': ['error', 'always'],
    'consistent-return': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'max-len': ['error', 120],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    semi: ['error', 'never'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'class-methods-use-this': 0,
    'object-curly-newline': ['error', { consistent: true }],
  },
  globals: {}
}
