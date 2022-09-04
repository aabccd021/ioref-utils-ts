import path from 'path';
import { defineConfig, UserConfigExport } from 'vitest/config';

export const config: UserConfigExport = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ioref-utils-ts',
    },
  },
};

export default defineConfig(config);
