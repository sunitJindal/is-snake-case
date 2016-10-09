import test from 'ava';
import f from './';

test('is snake case', t => {
  t.is(f('foo_bar'), true);
  t.is(f('foo__bar'), false);
  t.is(f('_foo_bar'), false);
  t.is(f('_foo_bar_'), false);
  t.is(f('_bar'), false);
  t.is(f('_'), false);
  t.is(f('Foo_bar'), false);
  t.is(f('Foo_Bar'), false);
});
