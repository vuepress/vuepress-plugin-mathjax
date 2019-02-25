const path = require('path')
const url = require('url')

const { TeX } = require('mathjax3/mathjax3/input/tex')
const { SVG } = require('mathjax3/mathjax3/output/svg')
const { CHTML } = require('mathjax3/mathjax3/output/chtml')
const { HTMLDocument } = require('mathjax3/mathjax3/handlers/html/HTMLDocument')
const { liteAdaptor } = require('mathjax3/mathjax3/adaptors/liteAdaptor')
const { LiteDocument } = require('mathjax3/mathjax3/adaptors/lite/Document')
const { AllPackages } = require('mathjax3/mathjax3/input/tex/AllPackages')

const defaultMacros = require('./defaultMacros')

const escapedCharacters = '^$()[]{}*.?+\\|'

function toEscapedString(source) {
  const chars = source.trim().split('').map(char => {
    return escapedCharacters.includes(char) ? '\\' + char : char
  })
  const lastChar = chars[chars.length - 1]
  if (lastChar.match(/\w/)) chars.push('\\b')
  return chars.join('')
}

function ensureArray(option) {
  if (!option) {
    return []
  } else if (Array.isArray(option)) {
    return option
  } else {
    return [option]
  }
}

module.exports = (options, tempPath) => {
  let {
    em = 16,
    ex = 8,
    width = 80 * 16,
    packages = AllPackages,
    target = '',
  } = options

  if (typeof packages === 'string') {
    packages = packages.split(/\s*,\s*/)
  }

  const macros = Object.assign({}, defaultMacros, options.macros)
  const globalPresets = ensureArray(options.presets)

  for (const key in macros) {
    if (typeof macros[key] !== 'string') {
      delete macros[key]
    }
  }
  const macroRegex = new RegExp(Object.keys(macros).map(toEscapedString).join('|'), 'g')

  // set up mathjax and conversion function
  const InputJax = new TeX({ packages })
  const OutputJax = target.toLowerCase() === 'svg'
    ? new SVG()
    : new CHTML({
      fontURL: url.resolve(
        path.relative(
          tempPath,
          require.resolve('mathjax3')
        ),
        '../mathjax2/css',
      )
    })
  
  const adaptor = liteAdaptor()
  const html = new HTMLDocument(new LiteDocument(), adaptor, {
    InputJax,
    OutputJax,
  })

  return {
    style: adaptor.textContent(OutputJax.styleSheet(html)),
    render (source, display, presets) {
      source = globalPresets.concat(ensureArray(presets)).join('') + source
      source = source.replace(macroRegex, matched => macros[matched] + ' ')
      const math = new html.options.MathItem(source, InputJax, display)
      math.setMetrics(em, ex, width, 100000, 1)
      math.compile(html)
      math.typeset(html)
      return adaptor.outerHTML(math.typesetRoot)
    }
  }
}
