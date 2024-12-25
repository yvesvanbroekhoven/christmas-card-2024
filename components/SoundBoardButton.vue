<template>
  <audio ref="audio"></audio>
  <button class="arcade-button"  @click="playing = true; currentTime = 0"></button>
</template>

<script setup type="ts">
import { onMounted, ref } from 'vue'
import { useMediaControls } from '@vueuse/core'

const { id } = defineProps(['id'])

const audio = ref()
const { playing, currentTime, duration, volume } = useMediaControls(audio, {
  src: `${id}.m4a`,
})
</script>

<style>
.arcade-button {
  background-color: #10c20a;
  border-radius: 50%;
  border: none;
  box-shadow:
      inset 0 2px 0 #27da0b,
      inset 0 -2px 0 #09aa0c,
      inset 0 0 0 2px #14b309,
      inset 0 0 0 5px #16c20a,
      inset 0 0 0 6px #056107,
      inset 0 0 0 7px black,
      inset 0 0 0 8px rgba(124, 247, 110, 0.7),
      inset 0 0 0 11px #23c20a,
      inset 0 24px 8px #0eaa09,
      inset 0 0 6px 10px #219108,
      0 3px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1.5rem;
  height: 60px;
  outline: none;
  padding: 0;
  position: relative;
  transition: box-shadow 128ms;
  width: 60px;
  z-index: 800;
}

@media (min-width: 480px) {
  .arcade-button {
    transform: scale(1.2);
  }
}

@media (min-width: 768px) {
  .arcade-button {
    transform: scale(1.3);
  }
}

@media (min-width: 1280px) {
  .arcade-button {
    transform: scale(1.5);
  }
}

.arcade-button:active {
  background-color: #10b80a;
  box-shadow:
      inset 0 2px 0 #12da0b,
      inset 0 -2px 0 #14aa09,
      inset 0 0 0 2px #2eb309,
      inset 0 0 0 5px #1cc20a,
      inset 0 0 0 6px #086105,
      inset 0 0 0 7px black,
      inset 0 0 0 8px rgba(247, 133, 110, 0.2),
      inset 0 0 0 11px #20b309,
      inset 0 24px 8px #129b08,
      inset 0 0 6px 10px #157906,
      0 3px 0 rgba(0, 0, 0, 0.3);
}

.arcade-button::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 7px;
  display: block;
  width: 46px;
  height: 46px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-width: 0 0 4px;
  border-radius: 50%;
  transition-duration: 128ms;
}

.arcade-button:active::after {
  border-width: 0;
  bottom: 7px;
}
</style>