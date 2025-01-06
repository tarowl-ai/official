#!/usr/bin/env sh

# abort on errors
set -e

# get version from package.json
VERSION=$(node -p "require('./package.json').version")

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# copy app-ads.txt to dist
cp ../public/app-ads.txt .

git init
git add -A
git commit -m "deploy: v${VERSION}"

# create a new tag
git tag "v${VERSION}"

# deploy to github pages
git push -f git@github.com:tarowl-ai/official.git main:gh-pages
git push -f git@github.com:tarowl-ai/official.git --tags

cd - 