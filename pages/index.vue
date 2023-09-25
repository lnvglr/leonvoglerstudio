<template>
  <main>
    <Code class="mx-5" />
    <div class="flex flex-col sm:flex-row gap-y-5 gap-x-24 w-full overflow-auto p-5 my-12">
      <div v-for="(image, i) in images" :key="i" class="flex flex-col gap-2 shrink-0">
        <NuxtImg
          :src="image.src"
          sizes="480px xs:720px sm:1080px md:1440px lg:100vw"
          quality="70"
          format="webp"
          :alt="image.alt"
          loading="lazy"
          class="rounded-xl bg-stone-50 sm:h-[960px] sm:max-h-[60vh]"
          @load="image.loaded = true"
        />
        <span v-if="image.loaded" class="leading-none">{{ image.description }}</span>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const images = ref([
  {
    src: 'img/File0196.webp',
    alt: 'A person waiting for a train.',
    description: 'Odessa, Ukraine',
    loaded: false,
  },
  {
    src: 'img/IMG_4032.webp',
    alt: 'A leaking water pipe.',
    description: 'Gjumri, Armenia',
    loaded: false,
  },
  {
    src: 'img/File0170.jpg',
    alt: 'A person putting clothes on a rack outside a hotel window.',
    description: 'Batumi, Georgia',
    loaded: false,
  },
  {
    src: 'img/IMG_4612.jpg',
    alt: 'A highrise building.',
    description: 'Bratislava, Czech Republic',
    loaded: false,
  },
])
</script>
