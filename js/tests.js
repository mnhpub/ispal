import { strict as assert } from 'assert';
import { accessElements } from './solution.js';

export function grade() {
  assert.deepEqual(accessElements([1,2,3]), [1,3]);
  assert.deepEqual(accessElements(['a','b']), ['a','b']);
  assert.equal(accessElements([]), null);
}
