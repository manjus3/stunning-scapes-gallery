
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# IMPORTANT: Update these placeholders with your actual GitHub username and repository name
# Example: git push -f git@github.com:johndoe/my-photo-gallery.git main:gh-pages
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
