import { io } from 'fp-ts';
import { pipe } from 'fp-ts/function';
import { pass, runTests, Tests } from 'unit-test-ts';
import { expect, it } from 'vitest';

import { appendonlyArray } from '../src/io_ref_util';

const tests: Tests = {
  'initial state is an empty array': pass({
    expect: pipe(
      io.Do,
      io.bind('arr', appendonlyArray),
      io.chain(({ arr }) => arr.read)
    ),
    toEqual: [],
  }),
};

runTests(tests, expect, it);
