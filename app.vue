<template>
  <div class="font-normal flex flex-col text-stone-700">
    <div
      class="inset-0 fixed -z-10 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] via-20% to-50% to-white bg-cover duration-1000"
      :class="{
        'from-purple-200 via-blue-50': name === 'contact-about',
        'from-red-200 via-orange-50':
          name === 'privacy-policy' || name === 'legal-notice',
        'from-teal-200 via-green-50': name === 'index',
      }"
      :style="`filter: hue-rotate(${hue}deg);`"
    />
    <!-- {{new Date().getTime() % 3}} -->
    <div
      class="flex flex-col min-h-screen p-5 sm:p-10 md:px-20 gap-5 sm:gap-10"
    >
      <Header />
      <NuxtPage class="flex flex-col" />
    </div>
    <Footer class="mt-auto p-5 sm:p-10" />
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()
const name = ref('')
const hue = ref(Math.floor(Math.random() * 360))
const interval = ref()
onMounted(async () => {
  await router.isReady()
  name.value = route.name
  interval.value = setInterval(() => hue.value++, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(route, () => {
  name.value = route.name
})
</script>
