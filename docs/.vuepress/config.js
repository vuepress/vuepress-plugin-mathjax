const name = 'vuepress-plugin-mathjax'

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  theme: 'contrib',
  
  plugins: [
    [require('../..'), {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    }],
  ],
  
  locales: {
    '/en/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin which supports TeX syntax in markdown files',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '在 markdown 中支持 TeX 语法的 VuePress 插件',
    },
  },
  
  themeConfig: {
    sidebar: [
      '',
      'config.html',
    ],
  },

  evergreen: !isProd,
})
