const test = require('ava');
const parser = require('../../index.js');
const {Strikethrough, Text} = require('../../nodes/index.js');

test('Parse strikethrough text', async t => {
  const text = 'This is ~~strikethrough~~ text';
  const tree = parser(text).ast;

  t.is(tree.length, 1);
  const values = tree[0].values;
  t.is(values.length, 3);

  t.true(values[0] instanceof Text);
  t.is(values[0].value, 'This is ');
  t.true(values[1] instanceof Strikethrough);
  t.is(values[1].value, 'strikethrough');
  t.true(values[2] instanceof Text);
  t.is(values[2].value, ' text');
});
