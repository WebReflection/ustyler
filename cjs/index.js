'use strict';
module.exports = cssText => {
  if ((cssText || '').length) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssText));
    document.head.appendChild(style);
  }
};
