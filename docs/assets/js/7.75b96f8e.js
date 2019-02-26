(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{323:function(t,s,a){"use strict";a.r(s);var r=a(28),e=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"global-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Global Installation")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g vuepress-plugin-mathjax\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn global add vuepress-plugin-mathjax\n")])])]),a("h3",{attrs:{id:"local-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Installation")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-mathjax\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\nyarn add vuepress-plugin-mathjax\n")])])]),a("h3",{attrs:{id:"add-to-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-to-config-js","aria-hidden":"true"}},[t._v("#")]),t._v(" Add to "),a("code",[t._v("config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mathjax'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      macros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\times'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chtml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      presets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\def\\\\lr#1#2#3{\\\\left#1#2\\\\right#3}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("See detailed configurations "),a("router-link",{attrs:{to:"/en/guide/config.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("h3",{attrs:{id:"inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline","aria-hidden":"true"}},[t._v("#")]),t._v(" Inline")]),t._v(" "),a("p",[t._v("Surround your LaTeX with a single "),a("code",[t._v("$")]),t._v(" on each side for inline rendering.")]),t._v(" "),a("p",[a("strong",[t._v("Input:")])]),t._v(" "),a("pre",{staticClass:"math-block"},[t._v("Euler's identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n")]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("div",{staticClass:"math-block"},[a("p",[t._v("Euler's identity "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C0"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v(" is a beautiful formula in "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msup",[a("mjx-TeXAtom",[a("mjx-mi",{staticClass:"mjx-ds"},[a("mjx-c",{attrs:{c:"R"}})],1)],1),a("mjx-script",{staticStyle:{"vertical-align":"0.41em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block","aria-hidden":"true"}},[t._v("#")]),t._v(" Block")]),t._v(" "),a("p",[t._v("Use two ($$) for block rendering. This mode uses bigger symbols and centers the result.")]),t._v(" "),a("p",[a("strong",[t._v("Input:")])]),t._v(" "),a("pre",{staticClass:"math-block"},[t._v("$$\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) \n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}$$\n")]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("div",{staticClass:"math-block"},[a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2202"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2202"}})],1),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-mrow",[a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:")"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mrow",{attrs:{space:"4"}},[a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:")"}})],1)],1),a("mjx-mrow",[a("mjx-mo",{staticClass:"mjx-s4"},[a("mjx-c",{attrs:{c:"{"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"l"}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2061"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.413em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-munderover",{attrs:{space:"3"}},[a("mjx-over",{staticStyle:{"padding-bottom":"0.192em","padding-left":"0.563em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"r"}})],1)],1),a("mjx-box",[a("mjx-munder",[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.148em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mfrac",{attrs:{space:"2"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"22EF"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"l"}}),a("mjx-c",{attrs:{c:"o"}}),a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2061"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-msup",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C9"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"i"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-s4"},[a("mjx-c",{attrs:{c:"}"}})],1)],1)],1)],1)],1)]),t._v(" "),a("h3",{attrs:{id:"conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conventions","aria-hidden":"true"}},[t._v("#")]),t._v(" Conventions")]),t._v(" "),a("p",[t._v("Math parsing in markdown is designed to agree with the conventions set by pandoc:")]),t._v(" "),a("blockquote",[a("p",[t._v("Anything between two $ characters will be treated as TeX math. The opening $ must have a non-space character immediately to its right, while the closing $ must have a non-space character immediately to its left, and must not be followed immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some reason you need to enclose text in literal $ characters, backslash-escape them and they won’t be treated as math delimiters.")])]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("h3",{attrs:{id:"using-macros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-macros","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Macros")]),t._v(" "),a("p",[t._v("This is part of "),a("code",[t._v("config.js")]),t._v(" of this project:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mathjax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      macros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\Z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\mathbb{Z}'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Input:")])]),t._v(" "),a("pre",{staticClass:"math-block"},[t._v("We have $a>n <=> a>=n+1$, if $a, n\\in\\Z$.\n")]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("div",{staticClass:"math-block"},[a("p",[t._v("We have "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"21D4"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2A7E"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v(", if "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2208"}})],1),a("mjx-TeXAtom",{attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-ds"},[a("mjx-c",{attrs:{c:"Z"}})],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"using-presets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-presets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Presets "),a("Badge",{attrs:{text:"vuepress 1.0.0-alpha.39+"}})],1),t._v(" "),a("p",[t._v("This is the frontmatter of this page:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebarDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mathjax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("presets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\def\\lr#1#2#3{\\left#1#2\\right#3}'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Input:")])]),t._v(" "),a("pre",{staticClass:"math-block"},[t._v("$$\\frac\\partial{\\partial t} \\lr({\\frac{y^t}t})$$\n")]),t._v(" "),a("p",[a("strong",[t._v("Output:")])]),t._v(" "),a("div",{staticClass:"math-block"},[a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2202"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mi",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2202"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-mrow",[a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-msup",[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-s3"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)]),t._v(" "),a("h2",{attrs:{id:"miscellaneous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous","aria-hidden":"true"}},[t._v("#")]),t._v(" Miscellaneous")]),t._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("p",[t._v("This plugin uses "),a("a",{attrs:{href:"https://github.com/mathjax/mathjax-v3",target:"_blank",rel:"noopener noreferrer"}},[t._v("mathjax-v3"),a("OutboundLink")],1),t._v(" (Early beta) which is not ready for production.")]),t._v(" "),a("h3",{attrs:{id:"related-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-libraries","aria-hidden":"true"}},[t._v("#")]),t._v(" Related Libraries")]),t._v(" "),a("p",[t._v("This plugin is inspired by some other libraries, thank you!")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/zlliang/vuepress-plugin-latex",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-latex"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/waylonflinn/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-katex"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/goessner/markdown-it-texmath",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-texmath"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/yamavol/markdown-it-mathjax-chtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-mathjax-chtml"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);