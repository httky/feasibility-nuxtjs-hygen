# feasibility-nuxtjs-hygen
NuxtプロジェクトでHygenを使った雛形ファイルの作成検証

- node.js >= 14.8.0
- npm >= 6.14.8
- [Hygen](https://www.hygen.io/)

## Build Setup

```bash
# install dependencies
$ npm install

# 各種雛形ファイルの作成
$ npm run new:domain # ドメインファイルの雛形
$ npm run new:manager # マネージャーファイルの雛形
```

## Overview
- ある程度ファイル構成が決まった実装を新しく作る際に複製・リネーム・不要な実装削除するのが面倒なので最低限の雛形を手軽に作れるようにしたい
- Nuxtとは関係のない仕組みなので他でも色々使えそう
- 対話のオプションをうまく作れば色々できそう

## 参考
- https://zenn.dev/takepepe/articles/hygen-template-generator
- https://mabui.org/hygen-nuxt-setup/
