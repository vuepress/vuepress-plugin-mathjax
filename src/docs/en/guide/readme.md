---
sidebarDepth: 3
mathjax:
  presets: \def\lr#1#2#3{\left#1#2\right#3}
---

# Introduction

## Usage

### Global Installation

```bash
npm i -g vuepress-plugin-mathjax
# OR
yarn global add vuepress-plugin-mathjax
```

### Local Installation

```bash
npm i vuepress-plugin-mathjax
# OR
yarn add vuepress-plugin-mathjax
```

### Add to `config.js`

```js
module.exports = {
  plugins: [
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    }],
  ]
}
```
or
```js
module.exports = {
  plugins: {
    mathjax: {
      target: 'chtml',
      presets: [
        '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
      ],
    },
  }
}
```

See detailed configurations [here](./config.md).

## Syntax

### Inline

Surround your LaTeX with a single `$` on each side for inline rendering.

**Input:**

<pre class="math-block">
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
</pre>

**Output:**

<div class="math-block">

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

</div>

### Block

Use two ($$) for block rendering. This mode uses bigger symbols and centers the result.

**Input:**

<pre class="math-block">
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
</pre>

**Output:**

<div class="math-block">

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$

</div>

### Conventions

Math parsing in markdown is designed to agree with the conventions set by pandoc:

> Anything between two $ characters will be treated as TeX math. The opening $ must have a non-space character immediately to its right, while the closing $ must have a non-space character immediately to its left, and must not be followed immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some reason you need to enclose text in literal $ characters, backslash-escape them and they won’t be treated as math delimiters.

## Features

### Using Macros

This is part of `config.js` of this project:

```js
module.exports = {
  plugins: {
    mathjax: {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    }
  }
}
```

**Input:**

<pre class="math-block">
We have $a>n <=> a>=n+1$, if $a, n\in\Z$.
</pre>

**Output:**

<div class="math-block">

We have $a>n <=> a>=n+1$, if $a, n\in\Z$.

</div>

### Using Presets <Badge text="vuepress 1.0.0-alpha.39+"/>

This is the frontmatter of this page:

```yaml
---
sidebarDepth: 3
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---
```

**Input:**

<pre class="math-block">
$$\frac\partial{\partial t} \lr({\frac{y^t}t})$$
</pre>

**Output:**

<div class="math-block">

$$\frac\partial{\partial t} \lr({\frac{y^t}t})$$

</div>

## Miscellaneous

### Dependencies

This plugin uses [mathjax-v3](https://github.com/mathjax/mathjax-v3) (Early beta) which is not ready for production.

### Related Libraries

This plugin is inspired by some other libraries, thank you!

- [vuepress-plugin-latex](https://github.com/zlliang/vuepress-plugin-latex)
- [markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex)
- [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath)
- [markdown-it-mathjax-chtml](https://github.com/yamavol/markdown-it-mathjax-chtml)
