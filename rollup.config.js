import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/RenMicronParser.js',
  output: {
    file: 'dist/ren-micron-parser.js',
    format: 'umd',
    name: 'RenMicronParser'
  },
  plugins: [resolve()]
}; 