const gitAuth = process.env.NODE_ENV === 'production' ? {
  clientId: 'de9cc415fb7353627426',
  clientSecret: 'b2bb2d4b92da310f8a760c6b5e0ff8ecdc47bd85'
} : {
  clientId: '80aebf2cffe2db703910',
  clientSecret: 'ef6ab6104b54e3869920dc7a1b6866d73cc349d8'
}

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
    [ '@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'ijse',
      repo: 'ijse.github.com',
      ...gitAuth
    }], [
      '@vuepress/google-analytics', {
        ga: 'UA-39566119-3'
      }]
  ]
}
