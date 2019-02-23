const path = require('path')

function resolve (...args) {
  return path.resolve(__dirname, '..', ...args)
}

module.exports = {
  base: '/vuepress-plugin-mathjax/',
  title: 'vuepress-plugin-mathjax',
  description: 'A LaTeX plugin for VuePress',
  dest: resolve('../../docs'),
  plugins: {
    '@vuepress/medium-zoom': {},
    '@vuepress/back-to-top': {},
    [resolve('../lib')]: {},
  },
  themeConfig: {
    repo: 'Shigma/vuepress-plugin-mathjax',
    editLinks: true,
    docsDir: 'src/docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'config.html',
      ],
    },
  },
}