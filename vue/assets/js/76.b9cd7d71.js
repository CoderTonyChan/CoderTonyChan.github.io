(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{320:function(s,t,a){"use strict";a.r(t);var e=a(23),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("请确保你的 Node.js 版本 >= 8。")])]),s._v(" "),a("h2",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),a("p",[s._v("如果你只是想尝试一下 VuePress，你可以全局安装它：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyarn global add vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm install -g vuepress")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个 markdown 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress!'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始写作")]),s._v("\nvuepress dev "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建静态文件")]),s._v("\nvuepress build "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])])]),a("h2",{attrs:{id:"现有项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现有项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 现有项目")]),s._v(" "),a("p",[s._v("如果你想在一个现有项目中使用 VuePress，同时想要在该项目中管理文档，则应该将 VuePress 安装为本地依赖。作为本地依赖安装让你可以使用持续集成工具，或者一些其他服务（比如 Netlify）来帮助你在每次提交代码时自动部署。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 VuePress 作为一个本地依赖安装")]),s._v("\nyarn add -D vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm install -D vuepress")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个 docs 文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个 markdown 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress!'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始写作")]),s._v("\nnpx vuepress dev docs\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("如果你的现有项目依赖了 webpack 3.x，推荐使用 "),a("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),a("OutboundLink")],1),s._v(" 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])]),s._v(" "),a("p",[s._v("接着，在 "),a("code",[s._v("package.json")]),s._v(" 里加一些脚本:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("然后就可以开始写作了:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yarn docs:dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm run docs:dev")]),s._v("\n")])])]),a("p",[s._v("要生成静态的 HTML 文件，运行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yarn docs:build "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm run docs:build")]),s._v("\n")])])]),a("p",[s._v("默认情况下，文件将会被生成在 "),a("code",[s._v(".vuepress/dist")]),s._v("，当然，你也可以通过 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 中的 "),a("code",[s._v("dest")]),s._v(" 字段来修改，生成的文件可以部署到任意的静态文件服务器上，参考 "),a("router-link",{attrs:{to:"./deploy.html"}},[s._v("部署")]),s._v(" 来了解更多。")],1)])},[],!1,null,null,null);n.options.__file="getting-started.md";t.default=n.exports}}]);