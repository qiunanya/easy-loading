import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
const pkgName = packageJson.umdModuleName;

export default {
    input: "./src/index.ts",
    output: [
        {
            file: "dist/esm/index.js",
            format: "esm",
        },
        {
            file: "dist/cjs/index.js",
            format: "cjs",
        },
        {
            file: "dist/umd/index.js",
            format: "umd",
            name: pkgName,
            globals: {
                // 配置依赖中的UMD全局变量名
                "easy-loading": pkgName
            },
        },
        {
            file: "dist/bundle/index.js",
            format: "iife",
            name: pkgName,
            plugins: [terser()],
        },
    ],
    plugins: [
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        resolve(), // 查找和打包node_modules中的第三方模块
        json(),
        terser(), // 压缩代码插件配置
        typescript({
            tsconfig: './tsconfig.json',
            compilerOptions: { lib: ["es5", "es6", "dom"], target: "es6" },
        }),
    ],
};
