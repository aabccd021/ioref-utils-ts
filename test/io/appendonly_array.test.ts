import { io } from 'fp-ts';
import { pipe } from 'fp-ts/function';
import { pass, runTests, Tests } from 'unit-test-ts';
import { expect, it } from 'vitest';

import { appendonlyArray } from '../../src/io/appendonly_array';

const tests: Tests = {
  'initial state is an empty array': pass({
    expect: pipe(
      io.Do,
      io.bind('arr', appendonlyArray),
      io.chain(({ arr }) => arr.read)
    ),
    toEqual: [],
  }),
  'append and read returns appended element': pass({
    expect: pipe(
      io.Do,
      io.bind('arr', appendonlyArray),
      io.chainFirst(({ arr }) => arr.append('masumoto')),
      io.chainFirst(({ arr }) => arr.append('nazuna')),
      io.chain(({ arr }) => arr.read)
    ),
    toEqual: ['masumoto', 'nazuna'],
  }),
};

runTests(tests, expect, it);
