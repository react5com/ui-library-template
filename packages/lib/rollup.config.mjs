import pkg from "./package.json" with { type: "json" };

import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import bundleSass from "@react5/bundle-sass";
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? 'production' : '';
const extensions = [".js", ".jsx", ".ts", ".tsx", ".json", ".svg", ];
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
      json(),
      svgr(),
      commonjs(),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourcemap: !production,
        skipPreflightCheck: true
      }),
      bundleSass({scssOnly: false}),
      production && terser(),
    ],
    watch: {
      paths: pathsToWatch
    }
  }
];
