import { task } from 'fp-ts';
import { pipe } from 'fp-ts/function';
import { pass, runTests, Tests } from 'unit-test-ts';
import { expect, it } from 'vitest';

import { appendonlyArray } from '../../src/task/appendonly_array';

const tests: Tests = {
  'initial state is an empty array': pass({
    expect: pipe(
      task.Do,
      task.bind('arr', appendonlyArray),
      task.chain(({ arr }) => arr.read)
    ),
    toEqual: [],
  }),
  'append and read returns appended elements': pass({
    expect: pipe(
      task.Do,
      task.bind('arr', appendonlyArray),
      task.chainFirst(({ arr }) => arr.append('masumoto')),
      task.chainFirst(({ arr }) => arr.append('nazuna')),
      task.chain(({ arr }) => arr.read)
    ),
    toEqual: ['masumoto', 'nazuna'],
  }),
};

runTests(tests, expect, it);
