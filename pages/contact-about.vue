<template>
  <main class="max-w-xl gap-5 sm:gap-10">
    <div>
      <h1 class="text-lg sm:text-xl font-bold">Contact / About</h1>
      <p>
        I grew up near Lake Constance. Already during high school I started working as a graphic designer. After high school I studied Integrated Design in Cologne. Throughout my studies I expanded my areas of work by diving into editorial design and typography on the one hand and web design and development on the other. My work is dominated by a clear visual language and clean code both of which enable me to serve a wide spectrum – from visual design to the building of apps.
      </p>
      <p>
        I have a versatile set of skills combining design expertise,
        technical proficiency, and
        <VTooltip class="inline">
          <button class="text-blue-500 underline underline-offset-4 hover:text-blue-600" role="button">
          multilingual communication</button
        >
        <template #popper>
          Deutsch ist meine Muttersprache, I am almost as comfortable with English as I am with German, no tengo problemas hablar Español, אני מדבר עברית טובה וכיף לי מאד и говорю по-русски, хотя и немного ржаво.
        </template>
      </VTooltip>.
      </p>
    </div>
    <div class="flex items-center gap-3">
      <NuxtImg
        src="/img/avatar-leon-vogler.jpg"
        sizes="100px"
        width="100px"
        height="100px"
        quality="70"
        format="webp"
        alt="Leon Vogler"
        loading="lazy"
        class="rounded-full w-16 h-16 sm:w-24 sm:h-24 -ml-2 border border-white"
      />
      <div class="flex flex-col flex-gap">
        <p class="font-bold text-lg">Leon Vogler</p>
        <ClientOnly
          ><a :href="`mailto:${mail}`" class="hover:underline">{{
            mail
          }}</a></ClientOnly
        >
      </div>
    </div>
    <!-- <NuxtLink
      class="hover:underline underline-offset-4 mr-auto rounded-lg flex gap-2 items-center"
      to="pdf/curriculum-vitae-2023.pdf"
      ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"/></svg><span>Open Curriculum Vitae</span></NuxtLink
    > -->
  </main>
</template>
<script setup lang="ts">

const mail = computed(() => 'studio@leonvogler.com')

</script>
<style>
.v-popper--theme-tooltip .v-popper__wrapper .v-popper__inner {
  /* padding: 0px; */
  background-color: #fafafa;
  border: 1px solid #ffffff;
  color: black;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  width: 360px;
  padding: 15px 20px
}
.v-popper--theme-tooltip .v-popper__arrow-outer {
  border-color: white;
}
</style>