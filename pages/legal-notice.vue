<template>
  <main class="p-5 max-w-xl">
    <h1 class="text-xl font-bold mb-5">Legal Notice</h1>
    <h2>Information according to § 5 TMG</h2>
    <p>Leon Vogler<br />
      Goltstein St 39<br />
      50968 Köln</p>

    <h2 class="font-bold">Contact:</h2>
    <ClientOnly><a :href="`mailto:${mail}`">{{mail}}</a></ClientOnly>
  </main>
</template>

<script setup lang="ts">
const mail = computed(() => 'post@leonvogler.de')
</script>
