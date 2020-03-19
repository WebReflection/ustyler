var ustyle = (function (exports) {
  'use strict';

  var index = (function (cssText) {
    if ((cssText || '').length) {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(cssText));
      document.head.appendChild(style);
    }
  });

  exports.default = index;

  return exports;

}({}).default);
