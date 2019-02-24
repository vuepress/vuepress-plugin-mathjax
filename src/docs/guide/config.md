---
sidebarDepth: 3
---

# Configurations

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

## showError

- **type**: `boolean`
- **default**: `false`
