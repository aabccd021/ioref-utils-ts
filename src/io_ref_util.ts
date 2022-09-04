import { io, ioRef, readonlyArray } from 'fp-ts';
import { pipe } from 'fp-ts/function';

export const appendonlyArray = <T>() =>
  pipe(
    ioRef.newIORef<readonly T[]>([]),
    io.map((ref) => ({
      append: (el: T) => pipe(ref.read, io.map(readonlyArray.append(el)), io.chain(ref.write)),
      read: ref.read,
    }))
  );
