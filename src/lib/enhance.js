import '@temp/plugins-mathjax.css'

export default ({ Vue }) => {
  const { ignoredElements } = Vue.config
  if (ignoredElements.every(tag => tag.toString() !== '/^mjx-/')) {
    ignoredElements.push(/^mjx-/)
  }
}
