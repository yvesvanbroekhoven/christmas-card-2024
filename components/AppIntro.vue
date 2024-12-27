<template>
  <header class="mx-auto max-w-3xl p-8">
    <h1 class="pacifico-regular">
      {{ introTextLine1 }},
      <br>
      <br>
      {{ $t('intro') }}
    </h1>
  </header>
</template>

<script setup type="ts">
const route = useRoute()

const introTextLine1 = `${atob(route.query.v)}`
</script>