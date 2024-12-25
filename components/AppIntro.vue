<template>
  <header class="mx-auto max-w-3xl p-8">
    <h1 class="pacifico-regular">
      {{ introTextLine1 }},
      <br>
      <br>
      ontdek onze boodschap via ons speciaal ontworpen SoundBoard2000™ hieronder 👇
    </h1>
  </header>
</template>

<script setup type="ts">
const route = useRoute()

const introTextLine1 = `${atob(route.query.v)}`
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.pacifico-regular {
  font-family: "Pacifico", serif;
  font-weight: 400;
  font-style: normal;
}

</style>