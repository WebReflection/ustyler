# <em>µ</em>styler

[![Build Status](https://travis-ci.com/WebReflection/ustyler.svg?branch=master)](https://travis-ci.com/WebReflection/ustyler) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/ustyler/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/ustyler?branch=master)

A minimalistic CSS style injector, usable either as function or as template literal tag.

```js
import css from 'ustyler';
// const css = require('ustyler');

const style = css`
  body {
    font-family: sans-serif;
  }
`;

setTimeout(() => style.remove(), 1000);
```
