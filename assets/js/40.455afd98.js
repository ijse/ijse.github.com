(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{338:function(t,a,r){"use strict";r.r(a);var s=r(27),n=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("如果要做一个有多种颜色主题（甚至可以支持自定义）的网站，我们可以为不同颜色主题分别写样式，但更好的方式是抽象出一套颜色体系，定义出颜色规范，确定几种元颜色值，不同颜色主题都通过这几种元颜色值按一定的变化方式产生，于是，多颜色主题的支持将会非常方便，并且其结果也将会令人满意，不会出现颜色值不协调、对比度不够等问题。")]),t._v(" "),r("p",[t._v("就像一个方程，给定特定几个参数，然后生成一套颜色主题。")]),t._v(" "),r("p",[t._v("而这也与通常设计的习惯相同，一般一套主题不会有特别多的色调，很多颜色都是相近或者是通过变换产生的。设计师们可能没有一种明确的计算方式，但凭他们的设计直觉会选出较合适的颜色值。")]),t._v(" "),r("p",[t._v("[[toc]]")]),t._v(" "),r("h2",{attrs:{id:"定义颜色类别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义颜色类别","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义颜色类别")]),t._v(" "),r("h3",{attrs:{id:"primary-color-主要色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#primary-color-主要色","aria-hidden":"true"}},[t._v("#")]),t._v(" Primary Color 主要色")]),t._v(" "),r("p",[t._v("这是网站的主色调，承载着页面主题需要向用户传递情感的任务，一般是网站Logo主颜色（品牌色），或者也可能是出现频率最高，面积最大的区域颜色。")]),t._v(" "),r("p",[t._v("通常情况下这种颜色（或者其派生颜色）可以用在导航背景色、网站全局背景色、一些边框颜色、普通按钮颜色（及按钮选中、激活、失效状态）等。")]),t._v(" "),r("p",[t._v("有些情况下也可能需要多种Primary Color，可以再定义 Secondary Color。")]),t._v(" "),r("h3",{attrs:{id:"accent-color-辅助色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accent-color-辅助色","aria-hidden":"true"}},[t._v("#")]),t._v(" Accent Color 辅助色")]),t._v(" "),r("p",[t._v("这种颜色是强调色，或者叫 衬托色，用于一些需要强调、引起用户特别关注的颜色，一般与Primary Color会有较强的对比反差，常用的如互补色，或者冷暖对比色。")]),t._v(" "),r("p",[t._v("通常用于 选中的文字背景色，悬浮按钮、执行操作按钮、进度条、选中的表单项高亮 等。")]),t._v(" "),r("p",[t._v("通常Secondary Color不会占比太多，一种较合适的颜色分布是： "),r("code",[t._v("Primary : Secondary : Accent = 6 : 3 : 1")])]),t._v(" "),r("h3",{attrs:{id:"semantic-colors-功能色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#semantic-colors-功能色","aria-hidden":"true"}},[t._v("#")]),t._v(" Semantic Colors 功能色")]),t._v(" "),r("p",[t._v("这种颜色是含有语义的，用于表示出错、失败、成功、警告等，通常分以下四种：")]),t._v(" "),r("ul",[r("li",[t._v("红色：代表 失败，出错，危险")]),t._v(" "),r("li",[t._v("黄色：代表 警告，注意，小心")]),t._v(" "),r("li",[t._v("绿色：代表 成功，安全，通行")]),t._v(" "),r("li",[t._v("蓝色：代表 普通中性提示信息")])]),t._v(" "),r("h3",{attrs:{id:"neutrals-中立色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neutrals-中立色","aria-hidden":"true"}},[t._v("#")]),t._v(" Neutrals 中立色")]),t._v(" "),r("p",[t._v("这种颜色是中性颜色，通常是 黑、白、灰，用于文字颜色、文章背景等，灰色是公认的安全色、百搭色，通常可以由另外两种颜色调配出来。")]),t._v(" "),r("h2",{attrs:{id:"颜色变换规则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#颜色变换规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 颜色变换规则")]),t._v(" "),r("p",[t._v("将以上几种颜色作为元颜色，其它所有颜色都从以上颜色中变换产生，于是接下来我们主要关注的是变换的方法，定义一套变化规则。")]),t._v(" "),r("p",[t._v("例如对于按钮，通常会有 默认状态、选中状态、禁用状态等：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/ijse/assets/pic/imgs/20190207001411.png",alt:""}})]),t._v(" "),r("p",[t._v("以上颜色都是从同一个颜色，通过变化 透明度、饱合度、对比度 等变换产生，这便是变化的规则。")]),t._v(" "),r("p",[t._v("定义变化的规则，应该着重注意识别度，不要让文字与背景不易被阅读。")]),t._v(" "),r("h2",{attrs:{id:"定义元颜色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定义元颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义元颜色")]),t._v(" "),r("p",[t._v("使用 CSS3 Variables 特性定义元颜色变量：")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root,\n:root .theme-default")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* primary color */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* grey */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-primary")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #616a79"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-primary-dark")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #28323f"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-primary-light")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ##838d9e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* accent color */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* yellow */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-accent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffe100"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* sematic color */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* green for success, safe, right */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-success")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #78e397"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* orange for alert, caution, warning */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-warn")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff9529"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* red for error, danger, wrong*/")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-error")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff4a4a"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* blue for information */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-info")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #218df2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* neutrals */")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-light")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #dddddd"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-dark")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #232c37"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root .theme-night")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root .theme-day")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("定义出不同颜色主题元颜色后，便可以给 "),r("code",[t._v("<html>")]),t._v(" 标签添加不同的class来改变页面主题。")]),t._v(" "),r("p",[t._v("注意：变量名称尽量不要用颜色名称，而是要用其代表的实际意义，抽象出其在样式主题中的意义。")]),t._v(" "),r("h2",{attrs:{id:"进一步阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进一步阅读","aria-hidden":"true"}},[t._v("#")]),t._v(" 进一步阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.jianshu.com/p/e662eb54c35e",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.jianshu.com/p/e662eb54c35e"),r("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);