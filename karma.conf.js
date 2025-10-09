module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['null-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: ['null-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    client: {
      jasmine: {
        random: false
      }
    }
  });
};
