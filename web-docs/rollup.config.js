import path from 'path';
import babel from '@rollup/plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { nodeResolve } from '@rollup/plugin-node-resolve'

const resolveFile = function(filePath) {
  return path.join(__dirname, filePath);
}

export default {
  input: './script.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
    name: 'docs',
  },
  plugins: [
    babel({ babelHelpers: 'bundled', exclude: ['node_modules/**'] }),
    nodeResolve(),
    livereload(),
    serve({
      port: 3001,
      contentBase: [resolveFile('/')]
    })
  ]
}
