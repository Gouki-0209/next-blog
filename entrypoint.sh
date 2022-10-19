#!/bin/bash

cd /usr/src/app

if [ ! -e package.json ]; then
    cd /usr/src/app
    yarn create next-app --example blog-starter . #ここで本体のインストール
fi


yarn dev #開発するときはこれ

# yarn build #リリース用
# yarn start