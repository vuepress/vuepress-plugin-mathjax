const name = 'vuepress-plugin-mathjax'

const guideSidebar = () => [
  '',
  'config.html',
  'changelog.html',
]

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    ['mathjax', {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    }],
  ],
  
  locales: {
    '/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin which supports TeX syntax',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '一个提供 TeX 语法支持的 VuePress 插件',
    },
  },
  
  themeConfig: {
    repo: `Shigma/${name}`,
    editLinks: true,
    docsDir: 'src/docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
          '/guide/': guideSidebar(),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
        ],
        sidebar: {
          '/zh/guide/': guideSidebar(),
        },
      },
    },
  },

  evergreen: !isProd,
})
