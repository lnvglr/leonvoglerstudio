<template>
  <main class="gap-5 sm:gap-10">
    <article class="max-w-xs lg:max-w-sm">
      <p>Heyya!</p>
      <p>
        My name is Leon and I am a visual designer and a front-end developer.
      </p>
      <p>
        I design clear and intriguing
        <button
          @mouseover="hoverDesignSection = 'editorial'"
          class="text-blue-500 underline-offset-4 hover:text-blue-600"
          :class="{
            'underline':
              hoverDesignSection === 'editorial',
          }"
        >
          editorials
        </button>
        (books, magazines, publications), light and easy
        <button
          @mouseover="hoverDesignSection = 'graphic'"
          class="text-blue-500 underline-offset-4 hover:text-blue-600"
          :class="{
            'underline':
              hoverDesignSection === 'graphic',
          }"
        >
          graphics
        </button>
        (posters, typefaces, illustrations) and clear and intuitive
        <button
          @mouseover="hoverDesignSection = 'userInterface'"
          class="text-blue-500 underline-offset-4 hover:text-blue-600"
          :class="{
            'underline':
              hoverDesignSection === 'userInterface',
          }"
        >
          interfaces
        </button>
        (websites, apps, interactions).
      </p>
      <p>
        In tech, I specialize in front-end development, writing code to create
        the user facing side of websites and apps. I write all my code using
        TypeScript in the frameworks of React and Vue and I use Tailwind CSS to
        apply styles.
      </p>
      <p>
      <Code class="inline" />
      </p>
    </article>
    <NuxtLink to="mailto:studio@leonvogler.com" class="p-2 py-1 text-blue-500 hover:text-blue-600 border border-current ite rounded mr-auto">Let's collab ❤️</NuxtLink>
    <div
      class="sm:fixed sm:right-[5vw] -mx-5 p-15 sm:w-[640px] max-w-screen sm:max-w-[30vw] md:max-w-[40vw] top-0 max-h-screen duration-1000 overflow-hidden"
      :class="
        hoverDesignSection
          ? `opacity-100 pointer-events-auto`
          : `opacity-0 pointer-events-none`
      "
    >
      <div class="flex sm:flex-col gap-10 marquee-group">
        <div
          v-for="(image, i) in [
            ...images[hoverDesignSection],
            ...images[hoverDesignSection],
          ]"
          :key="i"
          class="item flex flex-col gap-2 shrink-0"
        >
          <NuxtImg
            :src="image.src"
            sizes="480px xs:720px sm:1080px md:1440px lg:100vw"
            quality="70"
            format="webp"
            :alt="image.alt"
            :loading="i === 0 ? 'auto' : 'lazy'"
            class="rounded-xl bg-stone-50 h-56 sm:h-auto w-full object-cover"
            width=""
            @load="image.loaded = true"
          />
          <!-- <span v-if="image.loaded" class="leading-none">{{
            image.description
          }}</span> -->
        </div>
      </div>
    </div>
    <!-- <div
      class="flex flex-col sm:flex-row gap-y-5 gap-x-36 overflow-x-auto overflow-y-hidden -mx-5 px-5 sm:-mx-10 sm:px-10 md:-mx-20 md:px-20"
    >
      <div
        v-for="(image, i) in images"
        :key="i"
        class="flex flex-col gap-2 shrink-0"
      >
        <NuxtImg
          :src="image.src"
          sizes="480px xs:720px sm:1080px md:1440px lg:100vw"
          quality="70"
          format="webp"
          :alt="image.alt"
          :loading="i === 0 ? 'auto' : 'lazy'"
          class="rounded-xl bg-stone-50 sm:h-[960px] sm:max-h-[60vh]"
          width=""
          @load="image.loaded = true"
        />
        <span v-if="image.loaded" class="leading-none">{{
          image.description
        }}</span>
      </div>
    </div> -->
  </main>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en-US',
  },
})
useSeoMeta({
  title: 'Studio Leon Vogler',
  ogTitle: 'Studio Leon Vogler',
  description:
    'Leon Vogler is a developer and designer for in Vue, React, TypeScript.',
  ogDescription:
    'Leon Vogler is a developer and designer for in Vue, React, TypeScript.',
})
const images = {
  editorial: [
    {
      src: 'img/design/03-mo-mockup-chapter-1-scaled.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/wasted.jpg',
      alt: 'A person waiting for a train.',
      description: 'Odessa, Ukraine',
      loaded: false,
    },
    {
      src: 'img/design/Data_Literacy_Magazine_Mockup.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/data-oil-3.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
  ].sort((a, b) => 0.5 - Math.random()),
  graphic: [
    {
      src: 'img/design/R4-Leon_Vogler-scars_are_proof_you_lived-Text.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/agfa-3.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/goodtogrow.webp',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/seoul-grotesque-mockup.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/safari.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/zal.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
  ].sort((a, b) => 0.5 - Math.random()),
  userInterface: [
    {
      src: 'img/design/character-divesion.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/atf.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/rightsplus.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
    {
      src: 'img/design/vdb.jpg',
      alt: 'A leaking water pipe.',
      description: 'Gjumri, Armenia',
      loaded: false,
    },
  ].sort((a, b) => 0.5 - Math.random()),
}

const hoverDesignSection = ref<string | false>(
  Object.keys(images)[Math.floor(Math.random() * 2)]
)
</script>
<style scoped>
.marquee-group {
  --speed: 50s;
  --offset: calc(-50% - 20px);
  
  /* transform: translateY(0); */
  /* transform: translateY(calc(-50% - 10px)); */
  animation: scroll var(--speed) linear infinite;
  @media screen and (max-width: 639px) {
    --speed: 10s;
  }
}
@media screen and (max-width: 639px) {
  @keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(var(--offset));
  }
}
}
@media screen and (min-width: 640px) {
  @keyframes scroll {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(var(--offset));
  }
}
}
</style>
