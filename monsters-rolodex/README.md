# monsters-rolodex

## Set Up
```
create-react-app monsters-rolodex
```

## Json Placeholder API
[url](https://jsonplaceholder.typicode.com/users)

## Monster
[url](https://robohash.org/1?set=set2)

## gh-pages
Explore our master branch of GitHub as web page!!! 

```
yarn add gh-pages
```

```
# package json
 "homepage": "https://ono5.github.io/learning-react",
  "dependencies": {

  },
  "scripts": {

    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  },
```

```
yarn deploy

git add -A
git commit -m "adding files for github pages"
git push
```

Great!

You go to setting page on GitHub, and see GitHub Pages.

```
Your site is published at https://ono5.github.io/learning-react/
```
