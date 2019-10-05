import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const name = "vue-lib";
const version = process.env.VERSION || require("./package.json").version;
const banner = `/*!
  * vue-lib v${version}
  * @license ISC
  */`;

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs", banner, name },
    { file: pkg.module, format: "es", banner, name },
    { file: pkg.browser, format: "umd", banner, name }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: ["node_modules/**"]
    })
  ]
};
