const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/i,
        use: ['url-loader?limit=8100']
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test: /\.mp4$/,
        use: ['url-loader?limit=10000&mimetype=video/mp4']
      }
    ]
  },
  plugins: [new Dotenv()]
}

// --------------------------------------------------

// import svelte from 'rollup-plugin-svelte'
// import resolve from 'rollup-plugin-node-resolve'
// import globals from 'rollup-plugin-node-globals'
// import builtins from 'rollup-plugin-node-builtins'
// import commonjs from 'rollup-plugin-commonjs'
// import livereload from 'rollup-plugin-livereload'
// import { terser } from 'rollup-plugin-terser'

//const production = !process.env.ROLLUP_WATCH
// export default {
//   plugins: [
//     svelte({
//       // enable run-time checks when not in production
//       dev: !production,
//       // we'll extract any component CSS out into
//       // a separate file — better for performance
//       css: css => {
//         css.write('public/bundle.css')
//       }
//     }),

//     // If you have external dependencies installed from
//     // npm, you'll most likely need these plugins. In
//     // some cases you'll need additional configuration —
//     // consult the documentation for details:
//     // https://github.com/rollup/rollup-plugin-commonjs
//     resolve({
//       preferBuiltins: false,
//       browser: true,
//       dedupe: importee =>
//         importee === 'svelte' || importee.startsWith('svelte/')
//     }),
//     commonjs({
//       namedExports: {
//         // left-hand side can be an absolute path, a path
//         // relative to the current directory, or the name
//         // of a module in node_modules
//         'node_modules/idb/build/idb.js': ['openDb'],
//         'node_modules/firebase/dist/index.cjs.js': [
//           'initializeApp',
//           'firestore',
//           'auth'
//         ],
//         require: 'require'
//       },
//       include: /node_modules/
//     }),
//     globals(),
//     builtins(),

//     // Watch the `public` directory and refresh the
//     // browser on changes when not in production
//     !production && livereload('public'),

//     // If we're building for production (npm run build
//     // instead of npm run dev), minify
//     production && terser()
//   ],
//   watch: {
//     clearScreen: false
//   }
// }
