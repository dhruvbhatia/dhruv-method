module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dhruv-method/' : '/',
  configureWebpack: {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
  },
}
