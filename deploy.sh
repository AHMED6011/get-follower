#!/usr/bin/env/ sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deploment"
git push -f git@github.com:AHMED6011/get-follower.git master:gh-pages

cd -