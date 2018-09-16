# babel-preset-bbt
Babel preset used by BlackBird Team

## Install
```cmd
npm install --save-dev @babel/core babel-preset-bbt
```

Contains peer dependencies: [@babel/core](https://www.npmjs.com/package/babel-core) version [7.0.1](https://github.com/babel/babel/releases/tag/v7.0.1)
```cmd
npm i -D babel-preset-bbt
```

## Usage

Without options:

```
{
  "presets": ["bbt"]
}
```

or with: 

```
{
  "presets": [
    ["bbt", options]
  ]
}
```

## Options

### Common

- ```lang``` - Choose language: ```js``` or ```ts```. _default:_ ```ts``` 

- ```targets``` - You may override our default list of targets by providing your own targets
[More about targets](/docs/targets.md)

- ```env``` - Provide options for ```preset-env```. 

__CAUTIONS__ ```options.env.targets``` will overrides from ```options.targets``` if ```options.targets != undefined```

### For Javascript

- ```react``` - Enable react preset. _default:_ ```false``` 

- ```minify``` - Enable minification. _default:_ ```false```

- ```roots``` - You can supply an array of the above. The plugin will try each prefix/suffix pair in the order they are defined.
[More about roots](/docs/roots.md)

## Includes

### Common
[preset-env](https://babeljs.io/docs/en/babel-preset-env)\
[plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties/)

### For Javascript
[preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)\
[preset-minify](https://github.com/babel/minify/tree/master/packages/babel-preset-minify)

[plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)

### For Typescript
[preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)\
[plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)