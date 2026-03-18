# 项目约定参考

## 目录结构

```
vue-mpa-rsbuild/
├── rsbuild.config.ts          # Rsbuild 配置，动态扫描入口
├── tsconfig.json              # TypeScript 严格模式配置
├── tailwind.config.js         # Tailwind CSS 配置
├── postcss.config.cjs         # PostCSS 配置
├── package.json               # pnpm 项目配置
├── src/
│   ├── style/
│   │   └── common.css         # Tailwind 三层指令 (@tailwind base/components/utilities)
│   ├── pages/
│   │   ├── index/             # 首页
│   │   │   ├── index.ts       # 入口（固定模板）
│   │   │   ├── App.vue        # 页面组件
│   │   │   └── index.css      # 页面样式（可选）
│   │   └── about/             # 示例页
│   │       ├── index.ts
│   │       ├── App.vue
│   │       └── index.css
│   └── components/            # 共享组件（按需创建）
└── dist/                     # 构建产物
```

## 入口扫描机制

`rsbuild.config.ts` 中的核心逻辑：

```typescript
const entryFiles = await glob('./src/pages/**/index.{ts,js,vue}')
const templates = Object.fromEntries(
  entryFiles.map(file => {
    const entryName = path.basename(path.dirname(file))
    return [entryName, './' + file]
  })
)
```

- 页面文件夹名 = 入口名 = URL 路径名
- 新建页面文件夹后自动识别，无需修改配置
- 每个入口独立生成一个 HTML 文件

## 页面间导航

使用相对路径 `<a>` 标签，因为每个页面是独立的 HTML：

```vue
<!-- 从 home 页跳转到 about 页 -->
<a href="./about">查看 About</a>

<!-- 从 about 页返回 home 页 -->
<a href="./index">返回首页</a>
```



## TypeScript 路径别名

`tsconfig.json` 中配置：

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

用法：`import SomeComponent from '@/components/SomeComponent'`

## Vue 组件规范

- 使用 `<script setup>` 语法糖
- 图标导入：`import { IconName } from 'lucide-vue-next'`
- 状态管理：使用 `ref` / `reactive` / `computed`
- 组件通信：`props` / `emit`

## 构建输出

- `assetPrefix: "./"` — 使用相对路径，支持离线打开
- `legalComments: 'none'` — 移除开源注释
- `chunkSplit: 'all-in-one'` — 所有 chunk 合并
- `html.inject: 'body'` — script 标签放在 body 底部
