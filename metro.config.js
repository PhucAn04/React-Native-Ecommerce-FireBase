const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

// (Tùy chọn) Nếu bạn cần tắt hỗ trợ package export mới
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
