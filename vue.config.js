const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  },
  devServer: {
    port: 9002,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: "http://192.168.118.168:39961"
    proxy: {
      '/api/tacoscloud': {
        target: 'http://apisix-dev.x:19080',
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/style/theme.less'),
        path.resolve(__dirname, './src/assets/style/var.less')
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#5E66F2',
            'link-color': '#5E66F2'
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
