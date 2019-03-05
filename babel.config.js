module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ["@babel/proposal-class-properties", { "loose": true }],
    "@babel/plugin-proposal-object-rest-spread",
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { 'modules': false, targets: { node: 'current' } }],
        'module:metro-react-native-babel-preset',
        'jest'
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ]
    }
  }
}
