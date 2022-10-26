//卷起d.ts文件
import dts from "rollup-plugin-dts";
import del from 'rollup-plugin-delete'

const config = [{
    input: "./dist/types/ashe.react.build.d.ts",
    output: [{ file: "dist/types/index.d.ts", format: "es" }],
    plugins: [
        dts(),
        del({
            hook: 'buildEnd',
            targets: ['./dist/types', './dist/types/*.build.ts', './lib'],
        }),
    ],
}, ];

export default config;