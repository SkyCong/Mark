const path = require('path')

const config = {
  projectName: 'Mark',
  date: '2026-1-1',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'vue3',
  compiler: 'webpack5',
  cache: {
    enable: false
  },
  plugins: [
    '@tarojs/plugin-framework-vue3',
    '@tarojs/plugin-platform-alipay',
    '@tarojs/plugin-platform-tt',
    '@tarojs/plugin-platform-swan',
    '@tarojs/plugin-platform-jd',
    '@tarojs/plugin-platform-qq'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  sass: {
    resource: []
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@/assets': path.resolve(__dirname, '..', 'src', 'assets')
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: ['nut-']
          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240
          }
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
