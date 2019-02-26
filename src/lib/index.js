const { resolve } = require('path')
const tex2html = require('./tex2html')
const mathJaxPlugin = require('./markdown')

module.exports = (config = {}, ctx) => {
  const { style, render } = tex2html(config, ctx.tempPath)

  return {
    async ready() {
      await ctx.writeTemp('plugins-mathjax.css', style)
    },

    extendMarkdown: md => {
      md.use(mathJaxPlugin, {
        render,
        config,
      })
    },
    
    enhanceAppFiles: [
      resolve(__dirname, 'enhanceApp.js')
    ],
  }
}
