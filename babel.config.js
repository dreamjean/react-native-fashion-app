module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['babel-plugin-styled-components', 'react-native-reanimated/plugin'],
  };
};
