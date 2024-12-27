<template>
  <div>
    <div class="custom-border"></div>

<!--    <div class="p-6 flex gap-4">-->
<!--      <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)" :class="{ 'bg-green ': (locale.code === 'en') }" class="inline-block border-none px-4 py-2 cursor-pointer decoration-none c-black ">-->
<!--        {{ locale.name }}-->
<!--      </NuxtLink>-->
<!--    </div>-->

    <AppIntro></AppIntro>
    <SoundBoard></SoundBoard>

    <div class="custom-border"></div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

html,
body {
  font-family: sans-serif;
  height: 100%;
  padding: 0;
  margin: 0;
}

.pacifico-regular {
  font-family: "Pacifico", serif;
  font-weight: 400;
  font-style: normal;
}

.custom-border {
  background: #d9050c;
  background: repeating-linear-gradient(
      -45deg,
      #dc040b,
      #ce070f 12px,
      transparent 10px,
      transparent 23px
  );
  height: 1rem;
}
</style>