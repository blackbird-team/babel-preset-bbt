## Options: roots

You can supply an array of the above. The plugin will try each prefix/suffix pair in the order they are defined.

[babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)

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

Example customization:
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