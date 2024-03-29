import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

const modernConfig = {
  input: {
    ['auro-radio__bundled']: './index.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    nodeResolve(),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

const apiExamplesConfig = {
  input: {
    ['api.min']: './demo/api.js',
  },
  output: {
    format: 'esm',
    dir: 'demo/'
  }
};

export default [modernConfig, apiExamplesConfig];
