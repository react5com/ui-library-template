import pkg from "./package.json" with { type: "json" };

import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? 'production' : '';
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  "@babel/runtime"
];

const pathsToWatch =[ 'src/**' ];

export default [
  {
    input: "./src/index.tsx",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: !production,
        //inlineDynamicImports: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: !production,
        //inlineDynamicImports: true,
      },
    ],
    external,
    plugins: [
      resolve({
        extensions,
      }),
      commonjs(),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourcemap: !production,
        skipPreflightCheck: true
      }),
      postcss({extract: true}),
      copy({
        targets: [
          { src: 'dist/index.css', dest: '../../dist' }
        ]
      }),
      production && terser(),
    ],
    watch: {
      paths: pathsToWatch
    }
  }
];
