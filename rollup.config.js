import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default [
  // === Main ==
  {
    input: 'src/index.js',
    output: [{ file: 'builds/scal.js', format: 'umd', name: 'nlp' }],
    plugins: [nodeResolve(), terser()],
  },
  {
    input: 'src/index.js',
    output: [{ file: 'builds/scal.mjs', format: 'esm' }],
    plugins: [nodeResolve(), terser()],
  },
]
