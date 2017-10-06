# babel-preset-bbt
Babel preset used by BlackBird Team

## Install
```cmd
npm install --save-dev babel-core babel-preset-bbt
```

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

- ```react``` - Enable react preset

_default:_ ```fasle``` 

- ```minify``` - Enable minification

 _default:_ ```fasle```
 
- ```targets``` - You may override our default list of targets by providing your own targets

_default:_ 
```
{
    android: 30,
    chrome: 35,
    edge: 14,
    explorer: 9,
    firefox: 52,
    safari: 8,
    ucandroid: 1
}                             
```
Example providing:
```
{
	"presets": [
	    ["bbt", {
	        "targets": {
                  "node": true
                }
	    }]
    ]
}
    
```

[More about env](https://github.com/babel/babel-preset-env#targets)

- ```roots``` - 

_default:_ 
```
[
	{
		rootPathPrefix: "~",
		rootPathSuffix: "source/js"
	},
	{
		rootPathPrefix: "@",
		rootPathSuffix: "source/data"
	}
]                            
```
Example providing:
```
{
  "presets" : [
    ["bbt",
      {
        "roots": [
          {
            "rootPathPrefix": "~", "rootPathSuffix": "src/js"
          },
          {
            "rootPathPrefix": "@", "rootPathSuffix": "src/data"
          }
        ]
      }
    ]
  ]
}  
```

[More about roots](https://github.com/entwicklerstube/babel-plugin-root-import)

## Includes

[babel-preset-env](https://github.com/babel/babel-preset-env#targets)\
[babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)\
[babel-preset-minify](https://github.com/babel/minify/tree/master/packages/babel-preset-minify)

[babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
[babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)