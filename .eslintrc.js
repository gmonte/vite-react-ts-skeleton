module.exports = {
  root: true,
  extends: '@meta-configs/eslint-config/ts/react-web',
  parserOptions: { project: './tsconfig.json' },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src']
        ],
        extensions: ['.*']
      }
    }
  }
}
