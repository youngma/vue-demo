module.exports = {
  outputDir: 'dist',
  assetsDir: 'src/assets',
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => options);
  },
  devServer: {
    proxy: {
      '^/making/*': {
        target: 'process.env.DELIVERY_API',
        changeOrigin: true,
        pathRewrite: {
          '^/making': '',
        },
        logLevel: 'debug',
      },
      // '^/item/*': {
      //   target: process.env.ITEM_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/item': '',
      //   },
      //   logLevel: 'debug',
      // },
      // '^/common/*': {
      //   target: process.env.COMMON_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/common': '',
      //   },
      //   logLevel: 'debug',
      // },
      // '^/partner/*': {
      //   target: process.env.PARTNER_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/partner': '',
      //   },
      //   logLevel: 'debug',
      // },
      // '^/claims/*': {
      //   target: process.env.CLAIM_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/claims': '',
      //   },
      //   logLevel: 'debug',
      // },
      // '^/order/*': {
      //   target: process.env.ORDER_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/order': '',
      //   },
      //   logLevel: 'debug',
      // },
      // '^/inquiry/*': {
      //   target: process.env.PRODUCTINQUIRY_API,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/inquiry': '',
      //   },
      //   logLevel: 'debug',
      // },
    },
  },
};
