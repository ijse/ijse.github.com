module.exports = {
  title: '<ijse blog />',
  dest: './dist',
  markdown: {
    toc: {
      containerHeaderHtml: `<h1>目 录</h1>`,
      includeLevel: [1, 2, 3]
    }
  },
  plugins: [
    '@vuepress/blog'
  ]
}
