---
sidebarDepth: 3
---

# Configurations

## target

- **type**: `'svg' | 'chtml'`
- **default**: `'chtml'`

## packages

- **type**: `string | string[]`
- **default**: all the packages available

The packages to use.

## macros

- **type**: `{ [key: string]: string | null }`
- **default**: `{}`

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

- **type**: `boolean`
- **default**: `false`
