## Options: targets

You may override our default list of targets by providing your own targets

[babel-preset-env](https://github.com/babel/babel-preset-env#targets)

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

Example customization:
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