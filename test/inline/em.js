const test = require('ava');
const parser = require('../../index.js');

test('Parse em test with asterisk', async t => {
  const text = 'This is **em** text';
  const tree = parser(text);

  t.is(tree.length, 1);
  const values = tree[0].values;
  t.is(values.length, 3);

  t.is(values[0].name, 'text');
  t.is(values[0].value, 'This is ');
  t.is(values[1].name, 'em');
  t.is(values[1].value, 'em');
  t.is(values[2].name, 'text');
  t.is(values[2].value, ' text');
});

test('Parse em test with underscore', async t => {
  const text = 'This is __em__ text';
  const tree = parser(text);

  t.is(tree.length, 1);
  const values = tree[0].values;
  t.is(values.length, 3);

  t.is(values[0].name, 'text');
  t.is(values[0].value, 'This is ');
  t.is(values[1].name, 'em');
  t.is(values[1].value, 'em');
  t.is(values[2].name, 'text');
  t.is(values[2].value, ' text');
});