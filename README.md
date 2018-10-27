[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/localtrip-tech/with-next-redux-materialui-eslint)

# Next.js - Redux - MaterialUI - ESLint

## How to use

### Download manually

Download the example:

```bash
git clone https://github.com/localtrip-tech/with-next-redux-materialui-eslint.git
cd with-next-redux-materialui-eslint
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example shows how to integrate Redux, MaterialUI and ESLint in Next.js.

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use redux that also works with Next.js's universal rendering approach with a good UI library as Material UI wit some JavaScript linting.

The Redux `Provider` is implemented in `pages/_app.js`, Material UI is also integrated in `pages/_app.js` with theme support. Since the `MyApp` component is wrapped in `withReduxStore` the redux store will be automatically initialized and provided to `MyApp`, which in turn passes it off to `react-redux`'s `Provider` component.

All pages have access to the redux store using `connect` from `react-redux`.

On the server side every request initializes a new store, because otherwise different user data can be mixed up. On the client side the same store is used, even between page changes.

For simplicity and readability, store creator `store.js` is stored in the root directory with the `rootReducer.js` file.