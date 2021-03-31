const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: {
      name: "webhooks",
      type: "var",
      export: "default"
    },
  },
  resolve: {
    fallback: { 
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify")
    }
  }
};