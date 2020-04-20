module.exports = {

  devServer: {
    // set up proxying of API calls
    // this will have to be done differently by the production web server
    // e.g. ProxyPass in apache
    proxy: {
      '^/api': {
        target: 'http://localhost:8081/',
	pathRewrite: {
          '^/api/' : '/'
	},
        ws: true,
        changeOrigin: true
      }
    }
  },

  // from https://stackoverflow.com/questions/54309478/vue-router-always-loads-the-lazy-loaded-modules-on-intial-loading
  // lazy loading wasn't working until adding this
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}
