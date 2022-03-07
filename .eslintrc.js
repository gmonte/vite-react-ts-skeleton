module.exports = {
  root: true,
  env: { es2021: true },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    project: './tsconfig.json'
  },
  plugins: [
    'react-hooks',
    'import-helpers',
    'modules-newline',
    'newline-destructuring'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'generator-star-spacing': ['error', {
      before: false,
      after: true
    }],
    'import-helpers/order-imports': ['error', {
      newlinesBetween: 'always',
      groups: [
        '/^react/',
        '/^lodash/',
        '/^@mui/',
        'module',
        '/^~/',
        ['parent', 'sibling', 'index']
      ],
      alphabetize: {
        order: 'asc',
        ignoreCase: true
      }
    }],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'modules-newline/import-declaration-newline': 'error',
    'modules-newline/export-declaration-newline': 'error',
    'newline-destructuring/newline': 'error',
    'object-curly-newline': ['warn', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 3
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 3
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 3
      }
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'space-before-function-paren': ['error', 'always'],
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'template-curly-spacing': [2, 'always']
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} }
  }
}
