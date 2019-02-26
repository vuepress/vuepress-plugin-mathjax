const { getBaseConfig } = require('@shigma/vuepress-utils')

module.exports = getBaseConfig({
  name: 'vuepress-plugin-mathjax',
  locales: {
    en: 'A VuePress plugin which supports TeX syntax',
    zh: '一个提供 TeX 语法支持的 VuePress 插件',
  },
  plugins: {
    mathjax: {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    },
  },
})
