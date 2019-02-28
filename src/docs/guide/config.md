---
sidebarDepth: 3
---

# Configurations

Configurations marked with <Badge vertical text="frontmatter"/> will be allowed to be written in the `mathjax` option of the frontmatter of the page in VuePress 1.0.0-alpha.39 and higher. E.g:

```yaml
---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---
```

## target

- **type**: `'svg' | 'chtml'`
- **default**: `'chtml'`

The output of MathJax.

## packages

- **type**: `string | string[]`
- **default**: all the MathJax packages available

The MathJax packages to use.

## macros

- **type**: `{ [key: string]: string | null }`
- **default**: `{}`

Macros will be automatically mixed with built-in macros. To disable a built-in macro, simply set the value to `null` accordingly. Here is a list of all built-in macros:

<<< @/src/lib/defaultMacros.js

## presets <Badge text="frontmatter"/>

- **type**: `string | string[]`
- **default**: `[]`

The preset content to be added. The preset content will automatically be inserted before the TeX code.

## showError <Badge text="vuepress 1.0.0-alpha.40+"/>

- **type**: `boolean`
- **default**: `false`

Whether to output an error message in the console when a compilation error is encountered.

## cache

- **type**: `false | object`
- **default**: `{}`

[LRU Cache](https://github.com/isaacs/node-lru-cache) Options. If set to `false`, no cache will be used.
