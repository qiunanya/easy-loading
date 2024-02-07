import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { readFileSync } from "fs";
const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
const pkgName = packageJson.umdModuleName;

export default {
    input: "./src/index.ts", // 配置打包入口
    output: [
        {
            // 支持esm module
            file: "dist/index.esm.js",
            format: "esm",
        },
        {
            // 支持node环境
            file: "dist/index.cjs.js",
            format: "cjs",
        },
        {
            // 支持浏览器
            file: "dist/index.js", // 最终打包出来的文件路径和文件名
            format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
            name: pkgName,
        },
    ],
    plugins: [
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        resolve(), // 查找和打包node_modules中的第三方模块
        json(),
        terser(), // 压缩代码插件配置
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        copy({
            targets: [
                { src: 'src/theme/**/*', dest: 'dist/theme'}
            ]
        })
    ],
};
