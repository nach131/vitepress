#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commmit -m 'deploy'
git push -f git@github.com:nach131/vitepress.git main:nach-pages
