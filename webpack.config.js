const path = require('path');

// module.exports = [
//   {
//     mode: "development",
//     entry: "./src/index.ts",
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, "dist"),
//     },
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: "ts-loader",
//           exclude: /node_modules/,
//         },
//       ],
//     },
//     resolve: {
//       extensions: [".tsx", ".ts", ".js"],
//     },
//     devtool: "source-map",
//     devServer: {
//       contentBase: path.join(__dirname, "dist"),
//       compress: true,
//       port: 9000,
//     },
//   }]
// ;

module.exports = [
  {
    // Client configuration
    name: 'client',
    entry: './src/client/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/client')
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map', // Optional, for better debugging
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  },
  {
    // Server configuration
    name: 'server',
    target: 'node',
    entry: './src/server/server.ts',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist/server')
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map', // Optional, for better debugging
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  }
];
