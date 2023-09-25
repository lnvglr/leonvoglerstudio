<template>
  <header role="banner" class="p-5">
    <div>
      <div class="font-bold uppercase">
        <h1 class="text-xl sm:text-2xl">
          <NuxtLink to="/" rel="home" class="hover:underline">{{ title }}</NuxtLink>
        </h1>
        <span class="text-lg sm:text-xl leading-none text-neutral-400">{{ description }}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const title = 'Studio Leon Vogler'
const description = 'Photography, Design & Development'
</script>
