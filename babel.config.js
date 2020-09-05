module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@controllers": "./src/controllers",
        "@database": "./src/database",
        "@config": "./src/config",
        "@models": "./src/models",
        "@utils": "./src/utils",
        "@middlewares": "./src/middlewares"
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts'
  ]
}