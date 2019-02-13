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
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/blog',
    [ '@vuepress/pagination', {
      perPagePosts: 9,
      postsFilter: data => {
        return data.type === 'post' &&
          data.frontmatter.published !== false &&
          data.frontmatter.draft !== true
      }
    }],
    [ '@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'ijse',
      repo: 'ijse.github.com',
      clientId: 'de9cc415fb7353627426',
      clientSecret: 'b2bb2d4b92da310f8a760c6b5e0ff8ecdc47bd85'
    }], [
      '@vuepress/google-analytics', {
        ga: 'UA-39566119-3'
    }]
  ],
  themeConfig: {
    updateTime: Date.now()
  }
}
