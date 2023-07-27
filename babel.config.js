module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '@apis': './src/apis',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@mocks': './src/mocks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@stores': './src/stores',
            '@themes': './src/themes',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
