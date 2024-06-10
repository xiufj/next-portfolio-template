---
date: "2024-05-27"
title: Next.js 15 来了
tagline: 全新的编译器、700倍的构建速度提升.
preview: >-
  在最近的 Vercel 峰会上,Next.js 团队宣布了 Next.js 15 版本中的一些重要更新和新特性。这些更新旨在提升开发者的开发体验,加快应用的性能。同时 Vercel 也推出了一些人工智能相关的新功能,如可以流式输出代码的AI助手。

image: >-
  https://images.unsplash.com/photo-1656427868828-79a829b92b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# create-next-app 升级：更简洁的 UI，700 倍更快的构建速度：

Webpack 升级为 Turbopack：世界上最快的模块打包器（官方如此宣称）：比 Webpack 快 700 倍比 Vite 快 10 倍

随着 v15 的发布，将 Turbopack 添加到你的 Next.js 项目中变得前所未有的简单：

```tsx
npm install next@latest
```

这个命令不仅会帮你生成一个新的 Next.js 项目，还会自动配置好 Turbopack，让你直接体验极速构建的快感。

## React 编译器、React 19 支持和更友好的错误提示

React 编译器是一个现代的 React 编译器，它能深入理解你的 React 代码，带来自动记忆化等优化，大多数情况下不再需要手动使用 useMemo 和 useCallback。它可以节省时间、预防错误、加快速度。.

## 新的缓存行为

在 Next.js 15 中，不再自动缓存以下内容：

fetch() 请求

路由处理程序：GET、POST 等

<Link> 客户端导航

如果你仍然希望缓存 fetch() 请求，可以在 next.config.js 中进行配置

## next/after：任务分离的新方式

在 Next.js 15 中，你可以使用新的 next/after 函数来将你的任务分离到不同的文件中。这使得你的代码更加模块化和可维护。

```tsx
import { after } from "next/after";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>{data}</p>
    </>
  );
}
```

## 部分预渲染 (Partial Prerendering, PPR)

在 Next.js 15 中，你可以使用新的 PPR 功能来部分预渲染你的页面。这使得你的页面加载速度更快，并且可以减少服务器的负载。

```tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      // 部分预渲染逻辑
    }
  }, [router.isReady]);

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </>
  );
}
```

## 新的错误页面

在 Next.js 15 中，你可以使用新的错误页面功能来自定义你的错误页面。这使得你可以更灵活地处理错误，并且可以提高用户体验。

```tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    // 错误处理逻辑
  }, [error]);

  return (
    <>
      <h1>Error</h1>
      <p>An error occurred: {error.message}</p>
    </>
  );
}
```

## 结束

Next.js 15 带来了诸多令人兴奋的新功能和性能提升，让开发者可以更高效地构建高性能的全栈 Web 应用。如果你还没有体验过这些新特性，现在就开始吧！
