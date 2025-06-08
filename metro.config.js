const {getDefaultConfig} = require("expo/metro-config");
const {withNativeWind} = require('nativewind/metro');
const {wrapWithReanimatedMetroConfig} = require("react-native-reanimated/metro-config");


const baseConfig = getDefaultConfig(__dirname)

const nativeWindConfig = withNativeWind(baseConfig, {input: "./global.css"});

const finalConfig = wrapWithReanimatedMetroConfig(nativeWindConfig);

module.exports = finalConfig;
