# VPar (Version Parser)

> A small, 0 dependency version manipulation kit.

# Installation

> Module has not been released yet.

``` bash
yarn add vpar
```

``` bash
npm i vpar
```

# API reference

> These are taken straight from the "./index.d.ts" file

> Please also note that this package hasn't been released yet. These are subject to heavy changes

## Class Vpar

### constructor(version: string): undefined
Loads a version into VPar so it can be manipulated

```
let vpar = new VPar(process.version);
```

### getVersion(splitIntoArray?: boolean = false): string | Array<string>

The most basic version return method. Expects a very simple version like `process.version`

``` javascript
let vpar = new VPar(process.version); // process.version = v18.6.0
vpar.getVersion(); // => 18.6.0
```

``` javascript
let vpar = new VPar(process.version); // process.version = v18.6.0
vpar.getVersion(true); // => ["18", "6", "0"]
```
