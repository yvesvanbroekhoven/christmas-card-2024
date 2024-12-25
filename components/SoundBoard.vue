<template>
  <ul class="justify-items-center grid grid-cols-3 list-none mx-auto mb-16 max-w-3xl p-4 md:grid-cols-4">
    <li v-for="id in shuffledIds" class="p-4 md:p-8">
      <SoundBoardButton :id="id"></SoundBoardButton>
    </li>
  </ul>
</template>

<script setup type="ts">
import SoundBoardButton from "~/components/SoundBoardButton.vue";

const ids = [];

for (let i = 0; i < 20; i++) {
  ids.push(i);
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledIds = shuffle(ids);
</script>