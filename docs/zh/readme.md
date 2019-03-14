---
sidebarDepth: 3
mathjax:
  presets: \def\lr#1#2#3{\left#1#2\right#3}
---

# 介绍

**输入:**

<pre class="math-block">
假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1
</pre>

**输出:**

<div class="math-block">

假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见, 当 $0 <= y <= 1$ 时, 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时, 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$

</div>

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-mathjax
# 或者
yarn global add vuepress-plugin-mathjax
```

### 局部安装

```bash
npm install vuepress-plugin-mathjax
# 或者
yarn add vuepress-plugin-mathjax
```

### 添加到 `config.js`

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
或者
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

在[这里](./config.md)可以查看详细的配置。

## 语法

### 行内语法

使用单个 `$` 围绕一段 TeX 语法进行内联渲染。

**输入:**

<pre class="math-block">
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
</pre>

**输出:**

<div class="math-block">

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

</div>

### 块语法

块语法使用两个符号 `$$`，它将会带来更大的符号和居中显示。

**输入:**

<pre class="math-block">
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
</pre>

**输出:**

<div class="math-block">

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$

</div>

### 一些约定

markdown 文件中的 TeX 语法将遵循 [pandoc](http://pandoc.org/MANUAL.html#math) 制定的准则：

> 两个 $ 之间的任何内容都将被视为 TeX 语法。开头的 $ 必须在其右边有一个非空格字符，而结尾的 $ 必须在其左边有一个非空格字符，并且不能立即跟随一个数字。因此 $20,000 和 $30,000 将不会解析为 TeX。如果由于某种原因你需要将文本置于 $ 字符中，则使用反斜杠转义它们即可。

## 特性

### 使用宏

这是这个项目的 `config.js` 中的插件部分：

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

**输入:**

<pre class="math-block">
若 $a, n\in\Z$，则 $a>n <=> a>=n+1$。
</pre>

**输出:**

<div class="math-block">

若 $a, n\in\Z$，则 $a>n <=> a>=n+1$。

</div>

### 使用预设 <Badge text="vuepress 1.0.0-alpha.39+"/>

这是这个页面的 frontmatter:

```yaml
---
sidebarDepth: 3
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---
```

**输入:**

<pre class="math-block">
$$\frac\partial{\partial t} \lr({\frac{y^t}t})$$
</pre>

**输出:**

<div class="math-block">

$$\frac\partial{\partial t} \lr({\frac{y^t}t})$$

</div>

## 其他

### 依赖

这个插件目前使用 [mathjax-v3](https://github.com/mathjax/mathjax-v3)（早期测试版），因此可能不适合生产环境。

### 相关工具

这个插件的部分灵感来自其他一些库，谢谢你们！

- [vuepress-plugin-latex](https://github.com/zlliang/vuepress-plugin-latex)
- [markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex)
- [markdown-it-texmath](https://github.com/goessner/markdown-it-texmath)
- [markdown-it-mathjax](https://github.com/classeur/markdown-it-mathjax)
- [markdown-it-mathjax-chtml](https://github.com/yamavol/markdown-it-mathjax-chtml)
