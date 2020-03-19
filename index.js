var ustyle = (function (exports) {
  'use strict';

  var index = (function (cssText) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssText));
    return document.head.appendChild(style);
  });

  exports.default = index;

  return exports;

}({}).default);
