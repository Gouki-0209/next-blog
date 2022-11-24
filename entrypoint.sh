#!/bin/bash

cd /usr/src/app

# if [ ! -e package.json ]; then
#     cd /usr/src/app
#     yarn create next-app . --typescript #ここで本体のインストール
#     # npx degit 'timlrx/tailwind-nextjs-starter-blog#typescript'
#     # yarn install
# fi
if grep next package.json >/dev/null; then
    echo Next is EXIST.
else
    cd /usr/src/app
    yarn create next-app --example blog-starter .
fi

while read line
do
  if grep $line package.json >/dev/null; then
    echo $line is EXIST.
  else
    echo $line is NOT EXIST.
    yarn add $line
  fi
done < /packages.txt
# npm install gray-matter
# npm install -D tailwindcss postcss autoprefixer
# npx tailwindcss init -p
# npm install unified remark-parse remark-rehype rehype-stringify
# npm install -D @tailwindcss/typography @tailwindcss/forms
# npm install next-seo
# npm install remark-toc
# npm install rehype-slug
# npm install remark-prism rehype-prism-plus
# npm install rehype-parse rehype-react
# npm install remark-unwrap-images
# npm install next-themes
# npm install @svgr/webpack
# npm install --save mdx-bundler esbuild
# npm install reading-time
# npm install remark-gfm remark-footnotes remark-math
# npm install rehype-autolink-headings rehype-katex rehype-citation 
# npm install rehype-preset-minify
# npm install image-size
# npm install react-device-detect --save
 
# yarn upgrade --latest

# yarn install

yarn dev #開発するときはこれ

# yarn build #リリース用
# yarn start