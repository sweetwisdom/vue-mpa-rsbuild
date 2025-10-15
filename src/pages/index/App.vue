<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <p>count is {{ count }}</p>
    <div>
      <button @click="count++">add</button>
      <button @click="count--">reduce</button>
    </div>
    <p>
      <a href="/about">to about</a>
    </p>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>

<script lang="ts" setup>
defineOptions({
  name: 'App',
})
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped></style>
