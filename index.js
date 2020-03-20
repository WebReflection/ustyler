var ustyle = (function (exports) {
  'use strict';

  /**
   * Create, append, and return, a style node with the passed CSS content.
   * @param {string|string[]} template the CSS text or a template literal array.
   * @param {...any} values the template literal interpolations.
   * @return {HTMLStyleElement} the node appended as head last child.
   */
  function ustyler(template) {
    var text = typeof template == 'string' ? [template] : [template[0]];

    for (var i = 1, length = arguments.length; i < length; i++) {
      text.push(arguments[i], template[i]);
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(text.join('')));
    return document.head.appendChild(style);
  }

  exports.default = ustyler;

  return exports;

}({}).default);
