import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
const pkgName = packageJson.umdModuleName;

export default {
    input: "./src/index.ts", // 配置打包入口
    output: [
        {
            file: "dist/index.esm.js",
            format: "esm",
            exports: 'auto'
        },
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            exports: 'auto'
        },
        {
            file: "dist/index.js", // 最终打包出来的文件路径和文件名
            format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
            name: pkgName,
            exports: 'auto'
        }
    ],
    plugins: [
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        resolve(), // 查找和打包node_modules中的第三方模块
        json(),
        terser(), // 压缩代码插件配置
        typescript({
            "tsconfig": "./tsconfig.json"
        }),
    ],
};
