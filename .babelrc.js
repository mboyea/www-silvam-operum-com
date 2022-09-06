module.exports = api => {
  api.cache(true);
  return {
    "presets": [
      "@babel/preset-env",
      [
        "solid",
        {"runtime": "automatic"},
      ],
      "@babel/preset-typescript",
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {"regenerator": true},
      ],
    ],
  }
}