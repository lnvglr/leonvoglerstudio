<template>
  <header role="banner" class="mix-blend-multiply">
    <div>
      <div class="font-bold uppercase">
        <h1 class="text-xl sm:text-2xl md:text-3xl">
          <NuxtLink to="/" rel="home" class="hover:underline underline-offset-4">{{ title }}</NuxtLink>
        </h1>
        <span class="text-lg sm:text-xl leading-none text-neutral-400 font-bold">{{ description }}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const title = 'Studio Leon Vogler'
const description = 'Designer & Developer'
</script>
