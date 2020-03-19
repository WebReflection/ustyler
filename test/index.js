global.document = {
  createElement: name => ({
    name,
    appendChild(child) {
      return (this.child = child);
    }
  }),
  createTextNode(text) {
    return {name: '#text', text};
  }
};

document.head = document.createElement('head');

const css = require('../cjs');

const style = css('body{color:green}');

console.assert(document.head.child === style);
console.assert(style.name === 'style', 'correct name');
console.assert(style.type === 'text/css', 'correct type');
console.assert(style.child.name === '#text', 'correct text node');
console.assert(style.child.text === 'body{color:green}', 'correct css text');

const tpl = css`body{color:${'red'}}`;

console.assert(document.head.child === tpl);
console.assert(tpl.name === 'style', 'correct name');
console.assert(tpl.type === 'text/css', 'correct type');
console.assert(tpl.child.name === '#text', 'correct text node');
console.assert(tpl.child.text === 'body{color:red}', 'correct css text');
