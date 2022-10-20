#!/bin/bash

cd /usr/src/app

if [ ! -e package.json ]; then
    cd /usr/src/app
    yarn create next-app . --typescript #ここで本体のインストール
fi

npm install gray-matter
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install marked

yarn dev #開発するときはこれ

# yarn build #リリース用
# yarn start