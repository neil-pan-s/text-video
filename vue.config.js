
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: './main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  }
}