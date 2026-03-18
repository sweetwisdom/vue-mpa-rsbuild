<template>
  <div class="relative min-h-screen overflow-hidden bg-black text-white">
    <!-- 背景层 -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30" />
      <div class="bg-grid" />
      <div class="absolute inset-0 bg-gradient-to-b from-[rgba(1,1,1,0.35)] to-[rgba(1,1,1,0.78)]" />
    </div>

    <!-- 导航栏 -->
    <nav class="fixed left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl md:px-8">
      <div class="inline-flex items-center gap-2 text-sm font-semibold tracking-tight">
        <Rocket class="h-4 w-4 text-emerald-400" />
        vue-mpa-rsbuild
      </div>
      <div class="hidden items-center gap-6 text-xs text-white/70 md:flex">
        <a class="transition hover:text-white" href="#intro">
          📘 项目介绍
        </a>
        <a class="transition hover:text-white" href="#highlights">
          ✨ 核心能力
        </a>
        <a class="transition hover:text-white" href="#quick-start">
          🚀 快速开始
        </a>
      </div>
      <a
        class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-white/90"
        href="./about"
      >
        <Zap class="h-3.5 w-3.5" />
        查看 About 页面 📖
      </a>
    </nav>

    <!-- 主内容区 -->
    <main
      class="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 pb-10 pt-28 text-center md:px-8"
      id="intro"
    >
      <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-green-600 text-[11px]">
          ⚡
        </span>
        基于 Rsbuild 的 Vue 多页面工程模板 💫
      </span>
      <h1 class="mb-4 text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[4.3rem]">
        快速搭建现代化
        <br />
        <span class="bg-gradient-to-b from-white to-emerald-400 bg-clip-text text-transparent">
          Vue MPA 项目
        </span>
      </h1>
      <p class="mb-8 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
        这个项目使用 TypeScript + pnpm + Rsbuild，支持动态页面入口、路径别名和
        Tailwind，适合营销页、后台系统与多业务子站并行开发。
      </p>

      <!-- 核心能力 -->
      <section
        class="mb-6 grid w-full max-w-5xl grid-cols-1 gap-3 md:grid-cols-3"
        id="highlights"
      >
        <article
          v-for="item in highlights"
          :key="item.title"
          class="rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-md"
        >
          <h3 class="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
            <component :is="item.icon" class="h-4 w-4 text-emerald-400" />
            <span>{{ item.emoji }}</span>
            {{ item.title }}
          </h3>
          <p class="text-xs leading-6 text-white/80">{{ item.desc }}</p>
        </article>
      </section>

      <!-- 常用命令 -->
      <section id="quick-start">
        <h2 class="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
          <Command class="h-4 w-4 text-emerald-400" />
          常用命令 🧪
        </h2>
        <div class="flex flex-wrap justify-center gap-2">
          <code
            v-for="cmd in commands"
            :key="cmd"
            class="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white/95"
          >
            <span></span>
            {{ cmd }}
          </code>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Rocket, Zap, Command, FileCode2, Code2, Sparkles } from 'lucide-vue-next'

defineOptions({
  name: 'App',
})

const videoRef = ref<HTMLVideoElement | null>(null)

// 核心能力数据
const highlights = [
  {
    icon: FileCode2,
    emoji: '🧩',
    title: '动态多页面入口',
    desc: '自动扫描 src/pages/**/index.vue，新增页面无需手改入口配置。',
  },
  {
    icon: Code2,
    emoji: '🛡️',
    title: 'TypeScript 严格模式',
    desc: '默认更高类型安全，减少线上回归与隐性错误。',
  },
  {
    icon: Sparkles,
    emoji: '🎨',
    title: 'Tailwind + PostCSS',
    desc: '已完成 Tailwind 3.4.19 接入，可快速构建业务页面。',
  },
]

const commands = ['pnpm install', 'pnpm dev', 'pnpm build', 'pnpm preview']

// 视频初始化 (MP4 格式)
onMounted(() => {
  const video = videoRef.value
  if (!video) return

  const source = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4'

  video.src = source
  video.play().catch(() => {})
})

// 清理视频
onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.removeAttribute('src')
    videoRef.value.load()
  }
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