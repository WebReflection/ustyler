var ustyle = (function (exports) {
  'use strict';

  /**
   * Create, append, and return, a style node with the passed CSS content.
   * @param {string|string[]} template the CSS text or a template literal array.
   * @param {...any} values the template literal interpolations.
   * @return {HTMLStyleElement} the node appended as head last child.
   */
  function ustyler(template) {
    if (typeof template === 'string') return create(template);
    var text = [template[0]];

    for (var i = 1, length = arguments.length; i < length; i++) {
      text.push(arguments[i], template[i]);
    }

    return create(text.join(''));
  }
  /**
   * Create, append, and return, a style node with the passed CSS content.
   * @param {string} text the CSS text
   * @return {HTMLStyleElement} the node appended as head last child.
   */

  var create = function create(text) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(text));
    return document.head.appendChild(style);
  };

  exports.default = ustyler;

  return exports;

}({}).default);
