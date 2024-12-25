<template>
  <div>
    <div class="custom-border"></div>

    <AppIntro></AppIntro>
    <SoundBoard></SoundBoard>

    <div class="custom-border"></div>
  </div>
</template>


<style>
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