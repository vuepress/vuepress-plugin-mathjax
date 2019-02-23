---
sidebarDepth: 3
---

# 配置

## target

- **类型**: `'svg' | 'chtml'`
- **默认值**: `'chtml'`

## packages

- **类型**: `string | string[]`
- **默认值**: all the packages available

The packages to use.

## macros

- **类型**: `{ [key: string]: string | null }`
- **默认值**: `{}`

Macros will be automatically mixed with built-in macros. To disable a built-in macro, simply set the value to `null` accordingly. Here is a list of all built-in macros:

```js
export default {
  // Arrow
  '|->': '\\mapsto',
  '<->': '\\leftrightarrow',
  '<=>': '\\Leftrightarrow',
  '==>': '\\Longrightarrow',
  '->': '\\rightarrow',
  '=>': '\\Rightarrow',
  // Dots
  '...': '\\cdots',
  // Arithmatic
  '+-': '\\pm',
  '-+': '\\mp',
  '==': '\\equiv',
  '!=': '\\ne',
  '>=': '\\leq',
  '<=': '\\geq',
  '<<': '\\ll',
  '>>': '\\gg',
  '\\dd': '\\mathrm{d}',
  '\\e': '\\mathrm{e}',
  '\\arccot': '\\operatorname{arccot}',
  '\\arcsec': '\\operatorname{arcsec}',
  '\\arccsc': '\\operatorname{arccsc}',
}
```

## showError

- **类型**: `boolean`
- **默认值**: `false`
