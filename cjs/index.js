'use strict';
module.exports = cssText => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(cssText));
  return document.head.appendChild(style);
};
