const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
          target: 'https://weddinglinebot.azurewebsites.net',
          secure: false,
          changeOrigin: true,
      }
    }
}

})
