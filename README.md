# <em>µ</em>styler

[![Build Status](https://travis-ci.com/WebReflection/ustyler.svg?branch=master)](https://travis-ci.com/WebReflection/ustyler) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/ustyler/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/ustyler?branch=master)

A minimalistic CSS style injector.

```js
import ustyler from 'ustyler';
// const ustyler = require('ustyler');

const styleNode = ustyler(`
  body {
    font-family: sans-serif;
  }
`);

setTimeout(() => styleNode.remove(), 1000);
```
