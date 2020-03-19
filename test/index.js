global.document = {
  createElement: name => ({
    name,
    appendChild(child) {
      this.child = child;
    }
  }),
  createTextNode(text) {
    return {name: '#text', text};
  }
};

document.head = document.createElement('head');

const ustyle = require('../cjs');

ustyle('body{color:green}');
ustyle('');
ustyle();

console.assert(document.head.child.name === 'style', 'correct name');
console.assert(document.head.child.type === 'text/css', 'correct type');
console.assert(document.head.child.child.name === '#text', 'correct text node');
console.assert(document.head.child.child.text === 'body{color:green}', 'correct css text');
