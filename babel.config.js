module.exports = {
  // ... some other config
  presets: ["babel-preset-expo"],
  plugins: [
    "nativewind/babel",
    // ... some other plugins
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          "^~(.+)": "./src/\\1",
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".json",
          ".tsx",
          ".ts",
          ".native.js",
        ],
      },
    ],
  ],
};
