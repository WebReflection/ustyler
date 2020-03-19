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

const ustyle = require('../cjs');

const style = ustyle('body{color:green}');

console.assert(document.head.child === style);
console.assert(style.name === 'style', 'correct name');
console.assert(style.type === 'text/css', 'correct type');
console.assert(style.child.name === '#text', 'correct text node');
console.assert(style.child.text === 'body{color:green}', 'correct css text');
