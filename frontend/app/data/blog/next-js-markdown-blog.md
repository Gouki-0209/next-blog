---
title: 'Next.jsでmarkdownブログを構築'
date: '2022-07-13'
description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
# image: nextjs.png
categories: ['react']
---

## 目次

Next.jsを使ってMarkdownのブログサイトの構築を一から行なっていきます。

## Next.js の準備

### プロジェクトの作成

[記事一覧](/)

npx create-next-appコマンドを利用してNext.jsプロジェクトの作成を行います。

```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```