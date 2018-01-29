# react-ts-starterkit
A lean alternative to `create-react-app` for build React apps with Typescript.
Covers everything from hot-reloading to testing to linting to styles. Also has an open
configuration policy so you can customize.

## Usage
```bash
git clone https://github.com/cnsheafe/react-ts-starterkit.git
yarn install
// Fire up the dev-server!
yarn start
```

For testing
```
yarn test
\\ Or for coverage tests
yarn cover
```

## Tech Stack
- React
- React Router v4
- Typescript
- Redux
- Immutable
- CSS/SCSS Modules with BEM utility

## Dev Tooling
- Webpack
- Hot Reloading
- Tslint
- Jest
- Enzyme

### Webpack Highlights
- HTMLWebpackPlugin with customizable `template.html`
- DLL and Awesome-Typescript-Loader for fast hot reloading
- Production build using UglifyJS
