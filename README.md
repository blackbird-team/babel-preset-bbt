# babel-preset-bbt
Babel preset used by BlackBird Team

## Install
```cmd
npm install --save-dev babel-core babel-preset-bbt
```

Contains peer dependencies: [babel-core](https://www.npmjs.com/package/babel-core) version [6.26.0](https://github.com/babel/babel/releases/tag/v6.26.0)
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

- ```react``` - Enable react preset. _default:_ ```false``` 

- ```minify``` - Enable minification. _default:_ ```false```
 
- ```targets``` - You may override our default list of targets by providing your own targets
[More about targets](/docs/targets.md)

- ```roots``` - You can supply an array of the above. The plugin will try each prefix/suffix pair in the order they are defined.
[More about roots](/docs/roots.md)

## Includes

[babel-preset-env](https://github.com/babel/babel-preset-env#targets)\
[babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)\
[babel-preset-minify](https://github.com/babel/minify/tree/master/packages/babel-preset-minify)

[babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)\
[babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)