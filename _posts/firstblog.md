---
date: "2023-07-15 T11:50:54.000Z"
title: Next.js入门
tagline: 一文带你梳理清楚 Next.js 的功能.
preview: >-
  如果你用过 React 或者想尝试 React，那么建议你使用 Next.js 来搭建 React 项目，本篇文章将带你详细了解 Next.JS 主要的一些功能，看它能给我们带来什么样的能力，然后再谈一下对 React 单页应用的看法。.
image: >-
  https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---

# Next.js 可以带给我们什么？

Next.js 是一个 React web 应用框架，这是官方对自己的定义，然后它主要做的事情有以下几点：

- 完善的工程化机制

- 良好的开发和构建性能

- 智能文件路由系统

- 多种渲染模式来保证页面性能体验

- 可扩展配置

- 提供其他多方面性能优化方案

- 提供性能数据，让开发者更好的分析性能。

- 提供的其他常用功能或者扩展，比如使用 mdx 来编写页面的功能等等。

## 完善的工程化机制

你不需要自己去配置 webpack 方案，它已经内置了以下工程化基础：

- babel 内置，支持 JS 代码向后兼容

- postcss 内置，支持 CSS 代码向后兼容

- browserslist 支持配置兼容的浏览器信息，配合 babel 和 postcss 工作。

- TypeScript 可选择使用，保证代码的质量，以及可阅读性和可维护性。

- eslint 可选择使用，检测代码格式，可自定义规则。vscode 编写代码，或者 build 打包时都会有提示。

- prettier 可通过扩展使用，格式化代码，可自定义规则。

- css modules 内置

- css-in-js 可扩展使用

- tailwind css 可扩展使用

## 良好的开发和构建性能

官方公布了 next.js 使用 turbopack 进行编译打包，称其编译速度极快，将是 webpack 的继承者，感兴趣的同学可以去看一看[2]，我记得有翻译版本，我们就不去测试它到底有多快了，反正就是很快。我是从 next.js 10 直接切到的 13，那感觉真的不要太爽，启动秒启，首次打开页面也秒开，因为开发模式 next.js 都是动态编译，启动的时候并不会去编译页面，访问才去动态编译，而且因为是多页应用，页面非共用部分互不影响，不会因为工程的业务模块变多而导致页面访问变慢。.

## 智能文件路由系统

Next.js 的智能文件路由指的是，页面写在 pages 目录或者 src/pages 下的 js 文件都会被认为是页面，也会当成页面来打包，路由定义了一套动态路由[3]的规则，感兴趣的可以去看一下。

## 可扩展配置

> Next.js 的可配置性真的是一个很强大的特色，它准备了一套默认就很好用的默认配置，但这些配置基本上用户都可以 完全 控制它（完全做一个保留，但大型工程基本上都是可以支撑的）。.

## 下面我们来分析一下它的可配置功能。

- 配置文件 next.config.js 中暴露了 webpack 实例，因此你可以完全控制 webpack

- 配置文件 next.config.js 中支持配置自定义配置，你可以把一些公用的不变的配置写在 serverRuntimeConfig 或者 publicRuntimeConfig 中，前者只会出现在服务端，后者会暴露到客户端。

- 可 自定义 server ，你可以在启动服务的时候做一些自己想要做的处理，比如 node.js 性能监控等等。

- 不自定义 server ，也可以使用它提供的 middreware 机制来拦截请求或者校验权限等事项。

- 自定义 APP，也就是 \_app.js，它用于处理多个页面公共部分。

- 自定义 Document，也就是\_document.js，用于自定义配置 html 生成内容，比如插入 Google 分析脚本。

- 自定义错误界面 也就是 404 或者 500 错误状态的页面。

- 可自定义 `babel`和 `postcss` 等工程化规则配置。

---
