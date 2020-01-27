# crwn-clothing

## SASS
```
yarn add node-sass
```

## Resolve Install Error

```
rm -rf yarn.lock
rm -rf node_modules
yarn
```

## Install Module

```
yarn add react-router-dom
```

## react-router
[url](https://reacttraining.com/react-router/web/guides/quick-start)

## Importing SVG in React

In the previous lesson, you may have seen the strange syntax: import { ReactComponent as Logo }

This is a a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:

[ref](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)

## FireBase
[Docs](https://firebase.google.com/docs/reference?hl=ja)

[Google Sing in](https://firebase.google.com/docs/auth/web/google-signin)

[npm firebase](https://www.npmjs.com/package/firebase)

```
yarn add firebase
```

### FIREBASE SDK 
```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBRuHKZluTG4Ag6tyIfm9Pvv39zYOWGXHw",
    authDomain: "crwn-db-62c55.firebaseapp.com",
    databaseURL: "https://crwn-db-62c55.firebaseio.com",
    projectId: "crwn-db-62c55",
    storageBucket: "crwn-db-62c55.appspot.com",
    messagingSenderId: "553095634374",
    appId: "1:553095634374:web:e6361464bc34d14e9326c7",
    measurementId: "G-J5PMVDMMWZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```