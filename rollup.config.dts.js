//卷起d.ts文件
import dts from "rollup-plugin-dts";
import del from 'rollup-plugin-delete'

const config = [{
  input: "./dist/esm/types/components/ashe.react.build.d.ts",
  output: [{file: "dist/types/index.d.ts", format: "es"}],
  plugins: [
    dts(),
    del({
      hook: 'buildEnd',
     // './dist/types/components','./dist/types/utils'
      targets: ['./dist/esm/types'],
      // targets: ['./dist/types', './dist/types/*.build.ts', './lib'],
    }),
  ],
},];

export default config;