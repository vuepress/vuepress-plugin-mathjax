---
sidebarDepth: 3
---

# 配置

标有 <Badge vertical text="frontmatter"/>记号的配置在 VuePress 1.0.0-alpha.39 以上的版本中将允许写在页面的 frontmatter 的 `mathjax` 选项中。例如：

```yaml
---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---
```

## target

- **类型**: `'svg' | 'chtml'`
- **默认值**: `'chtml'`

MathJax 的输出格式。

## packages

- **类型**: `string | string[]`
- **默认值**: 所有可以加载的 MathJax 包

设置使用的 MathJax 包。

## macros

- **类型**: `{ [key: string]: string | null }`
- **默认值**: `{}`

输入的宏将与内置的宏进行混合。如果要取消一个内置的宏替换，可以将对应的值设为 `null`。下面是一张内置宏的列表：

<<< @/src/lib/defaultMacros.js

## presets <Badge text="frontmatter"/>

- **类型**: `string | string[]`
- **默认值**: `[]`

要添加的预设内容。预设内容会自动插入到要编译的 TeX 代码前。

## showError <Badge text="vuepress 1.0.0-alpha.40+"/>

- **类型**: `boolean`
- **默认值**: `false`

当遇到编译错误时，是否要在控制台输出错误信息。
