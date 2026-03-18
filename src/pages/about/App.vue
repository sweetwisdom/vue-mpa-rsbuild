<template>
  <div class="relative min-h-screen overflow-hidden bg-black text-white">
    <!-- 背景层 -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black/60" />
      <div class="bg-grid" />
      <div class="absolute inset-0 bg-gradient-to-b from-[rgba(1,1,1,0.35)] to-[rgba(1,1,1,0.78)]" />
    </div>

    <!-- 导航栏 -->
    <nav class="fixed left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl md:px-8">
      <div class="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
        <Rocket class="h-4 w-4 text-emerald-400" />
        vue-mpa-rsbuild
      </div>
     
    
    </nav>

    <!-- 主内容区 -->
    <main
      class="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 pb-10 pt-28 text-center md:px-8"
      id="intro"
    >
      <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-green-600 text-[11px]">
          ⚡
        </span>
        关于项目 💫
      </span>
      <h1 class="mb-4 text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.5rem]">
        Vue MPA
        <br />
        <span class="bg-gradient-to-b from-white to-emerald-400 bg-clip-text text-transparent">
          工程模板
        </span>
      </h1>
      <p class="mb-8 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
        基于 Rsbuild 构建的高性能 Vue 多页面应用模板，支持 TypeScript、Tailwind CSS、动态页面入口等特性。
      </p>

      <!-- 特性列表 -->
      <section
        class="mb-8 grid w-full max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-2"
      >
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <h3 class="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
            <FileCode2 class="h-4 w-4 text-emerald-400" />
            🧩 动态多页面
          </h3>
          <p class="text-xs leading-6 text-white/80">
            自动扫描 src/pages/**/index.vue 目录，新增页面无需手动配置入口。
          </p>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <h3 class="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
            <Code2 class="h-4 w-4 text-emerald-400" />
            🛡️ TypeScript
          </h3>
          <p class="text-xs leading-6 text-white/80">
            严格类型检查，减少运行时错误，提升代码质量。
          </p>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <h3 class="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
            <Sparkles class="h-4 w-4 text-emerald-400" />
            🎨 Tailwind CSS
          </h3>
          <p class="text-xs leading-6 text-white/80">
            集成 Tailwind 3.4.x，快速构建现代化 UI 界面。
          </p>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <h3 class="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
            <Rocket class="h-4 w-4 text-emerald-400" />
            🚀 Rsbuild
          </h3>
          <p class="text-xs leading-6 text-white/80">
            基于 Rsbuild 的极简构建配置，高效的开发体验。
          </p>
        </div>
      </section>

      <!-- 返回首页 -->
      <a
        class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        href="/"
      >
        <span>←</span>
        返回首页
      </a>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Rocket, Zap, FileCode2, Code2, Sparkles } from 'lucide-vue-next'

defineOptions({
  name: 'App',
})
</script>

<style scoped>
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
}
</style>