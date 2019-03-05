module.exports = {
  preset: 'react-native',
  "roots": ["<rootDir>"],
  "setupFiles": [
    "<rootDir>/__tests__/setup.js",
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "./__tests__/transform.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native-elements|react-native|react-navigation-stack|react-native-localization|@react-navigation)",
    "/@babel\/runtime/"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // "snapshotSerializers": ["enzyme-to-json/serializer"],
  // "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.js"],
}