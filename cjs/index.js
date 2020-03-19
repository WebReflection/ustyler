'use strict';
/**
 * Create, append, and return, a style node with the passed CSS content.
 * @param {string|string[]} template the CSS text or a template literal array.
 * @param {...any} values the template literal interpolations.
 * @return {HTMLStyleElement} the node appended as head last child.
 */
function ustyler(template) {
  if (typeof template === 'string')
    return create(template);
  const text = [template[0]];
  for (let i = 1, {length} = arguments; i < length; i++)
    text.push(arguments[i], template[i]);
  return create(text.join(''));
}
module.exports = ustyler;

/**
 * Create, append, and return, a style node with the passed CSS content.
 * @param {string} text the CSS text
 * @return {HTMLStyleElement} the node appended as head last child.
 */
const create = text => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(text));
  return document.head.appendChild(style);
};
