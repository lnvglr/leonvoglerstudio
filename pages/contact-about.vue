<template>
  <main class="p-5 max-w-xl">
    <h1 class="text-xl font-bold mb-5">Contact / About</h1>
    <p>Heyaa!<br />I'm a highly committed developer and designer with experience in Vue, React, TypeScript and high proficiency in several spoken languages. Currently, I am engaged in freelance work, collaborating on both new and ongoing projects. I am also open to exploring part-time positions that allow me to leverage my skills and passion for aesthetics both in code and interface to make a positive impact.</p>
    <div class="flex items-center gap-3 my-5">
      <NuxtImg
        src="/img/IMG_1079.jpg"
        sizes="100px"
        width="100px"
        height="100px"
        quality="70"
        format="webp"
        alt="Leon Vogler"
        loading="lazy"
        class="rounded-full w-16 h-16 sm:w-16 sm:h-16"
      />
      <div class="flex flex-col flex-gap">
        <p class="font-bold">Leon Vogler</p>
        <ClientOnly
          ><a :href="`mailto:${mail}`" class="hover:underline">{{ mail }}</a></ClientOnly
        >
      </div>
    </div>
    <a class="hover:underline p-3 -m-3 rounded-lg hover:bg-stone-100" href="pdf/curriculum-vitae-2023.pdf">See my CV</a>
  </main>
</template>
<script setup lang="ts">
const mail = computed(() => 'post@leonvogler.de')
</script>
