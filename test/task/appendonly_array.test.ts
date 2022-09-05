import { task } from 'fp-ts';
import { pipe } from 'fp-ts/function';
import { executeTests, itExpect, Tests } from 'unit-test-ts';
import * as vitest from 'vitest';

import { appendonlyArray } from '../../src/task/appendonly_array';

const tests: Tests = {
  'initial state is an empty array': itExpect({
    task: pipe(
      task.Do,
      task.bind('arr', appendonlyArray),
      task.chain(({ arr }) => arr.read)
    ),
    toEqual: [],
  }),
  'append and read returns appended elements': itExpect({
    task: pipe(
      task.Do,
      task.bind('arr', appendonlyArray),
      task.chainFirst(({ arr }) => arr.append('masumoto')),
      task.chainFirst(({ arr }) => arr.append('nazuna')),
      task.chain(({ arr }) => arr.read)
    ),
    toEqual: ['masumoto', 'nazuna'],
  }),
};

executeTests(tests, vitest);
