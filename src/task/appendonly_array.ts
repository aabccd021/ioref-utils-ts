import { io, task } from 'fp-ts';
import { flow } from 'fp-ts/function';
import { pipe } from 'fp-ts/function';

import * as ioRefUtil from '../io';

export const appendonlyArray = <T>() =>
  pipe(
    ioRefUtil.appendonlyArray<T>(),
    io.map((ref) => ({
      append: flow(ref.append, task.fromIO),
      read: pipe(ref.read, task.fromIO),
    })),
    task.fromIO
  );
