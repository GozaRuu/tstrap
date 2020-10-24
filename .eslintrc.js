module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', args: 'none' }],
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
    curly: ['error', 'multi-line', 'consistent'],
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    'default-case': 'off',
    'import/extensions': ['error', 'never'],
    'import/first': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': 'warn',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'off',
    'max-len': ['error', 120, 2, { ignoreUrls: true, ignoreTemplateLiterals: true }],
    'newline-per-chained-call': 'warn',
    'no-await-in-loop': 'off',
    'no-confusing-arrow': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-continue': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-loop-func': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-only-tests/no-only-tests': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'warn',
    'no-sequences': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': ['warn', { functions: false, classes: false }],
    'prefer-destructuring': 'off',
    semi: ['error', 'never'],
    'sort-imports': 'off',
    'no-unused-expressions': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/ban-types': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-useless-constructor': 'off', // crashes on constructor declaration in .d.ts files
      },
    },
  ],
  plugins: ['no-only-tests', '@typescript-eslint'],
}
