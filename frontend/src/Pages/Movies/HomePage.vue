<template>
  <v-carousel height="600" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%" style="background: none">
        <video :src="slide.video" autoplay preload muted class="absolute -z-10 w-full -top-1/4"></video>
        <div class="d-flex fill-height justify-center align-center blur-black">
          <img :src="slide.img" alt="slider" class="poster" width="600">
          <div class="text-h2">
            {{ slide.title }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <div class="flex flex-col items-center justify-center p-8">
    <div class="flex flex-wrap gap-20">
      <MyCard v-for="(film, index) in allFilms.data" :key="index" :media="film" />
    </div>

    <ButtonMore @downloadMore="downloadMore" />
  </div>
</template>

<script lang="ts" setup>
import {getAllFilms} from "@/Services/MoviesService";
import {computedAsync} from "@vueuse/core";
import MyCard from "@/Components/MyCard.vue";
import ButtonMore from "@/Components/MyButtonMore.vue";

const slides = [
  {
    title: "First",
    img: "https://avatars.mds.yandex.net/get-ott/1531675/2a00000178cb2efc9762720b53a3b57633ef/orig",
    video: "src/assets/videos/spider-man.mp4"
  },
  {
    title: "Second",
    img: "https://avatars.mds.yandex.net/get-ott/224348/2a00000162251f4534d9ae8fa869a2b5ebc0/orig",
    video: "src/assets/videos/john-week.mp4"
  },
  // { title: "Third", img: "https://avatars.mds.yandex.net/get-ott/239697/2a00000178d64bd57daef1bff5c7511e7c61/orig" },
  // { title: "Fourth", img: "https://avatars.mds.yandex.net/get-ott/200035/2a0000016127541ac32f59d2fe27c5a2c276/orig" },
  // { title: "Fifth", img: "https://avatars.mds.yandex.net/get-ott/224348/2a0000016fb27d8a446a687218defab35631/orig" },
];

const allFilms = computedAsync<[]>(async () => {
  const { data } = await getAllFilms();
  return data;
}, []);

async function downloadMore() {
  const { data } = await getAllFilms(allFilms.value.current_page+=1);
  data.data.map((film) => {
    allFilms.value.data.push(film);
  });
}
</script>

<style scoped>
.blur-black {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}
.poster {
  @apply absolute left-20 top-10 rounded-xl;
  -webkit-box-shadow: 0px 0px 56px -2px rgba(0, 0, 0, 0.42) inset;
  -moz-box-shadow: 0px 0px 56px -2px rgba(0, 0, 0, 0.42) inset;
  box-shadow: 0px 0px 56px -2px rgba(0, 0, 0, 0.42) inset;
}
</style>