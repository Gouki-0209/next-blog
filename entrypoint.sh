#!/bin/bash

cd /usr/src/app

if [ ! -e package.json ]; then
    cd /usr/src/app
    yarn create next-app . --typescript #ここで本体のインストール
    # npx degit 'timlrx/tailwind-nextjs-starter-blog#typescript'
    # yarn install
fi


npm install gray-matter
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install unified remark-parse remark-rehype rehype-stringify
npm install -D @tailwindcss/typography
npm install next-seo
npm install remark-toc
npm install rehype-slug
npm install remark-prism
npm install rehype-parse rehype-react
npm install remark-unwrap-images
npm install next-themes
npm install @svgr/webpack

yarn install

yarn dev #開発するときはこれ

# yarn build #リリース用
# yarn start