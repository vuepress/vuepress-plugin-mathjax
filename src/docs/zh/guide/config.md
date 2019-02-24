---
sidebarDepth: 3
---

# 配置

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

## showError

- **类型**: `boolean`
- **默认值**: `false`
