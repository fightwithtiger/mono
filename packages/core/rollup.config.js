
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'

const extensions = ['.ts', '.js']

const overrides = {
  compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
  exclude: [ // 排除项
    'node_modules',
  ]
}

const resolve = (...args) => path.resolve(...args)

const config = [
  {
    input: resolve('./index.ts'),
    output: [
      {
        file: resolve('./', pkg.module),
        format: 'es',
        name: 'm-core',
      },
      {
        file: resolve('./', pkg.main),
        format: 'cjs',
        name: 'm-core',
      },
    ],
    plugins: [
      nodeResolve({
        extensions,
      }),
      typescript({
        tsconfigOverride: overrides
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
      commonjs({ extensions }),
    ],
    external: []
  }
]

export default config