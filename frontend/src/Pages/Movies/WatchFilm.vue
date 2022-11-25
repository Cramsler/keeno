<template>
  <img v-if="filmInfo.coverUrl" :src="filmInfo.coverUrl" alt="cover" class="absolute top-0 w-full left-0 -z-10">
  <div class="info-container">
    <h1 class="mb-8 text-4xl text-center">{{ film.ru_title }}</h1>
    <div class="relative flex flex-row w-full mb-24 justify-center gap-8">
      <img :src="posterLink" alt="poster" class="w-1/4">
      <div class="text-xl mb-12 flex flex-col w-3/4">
        <p v-if="filmInfo.description" class="description">{{ filmInfo.description }}</p>
        <div class="flex flex-row justify-between w-full gap-x-8">
          <div class="flex flex-col gap-y-8 w-full min-w-[400px]">
            <div v-if="filmInfo.countries.length" class="info-item-block">
              <div class="info-item">Страна</div>
              <div class="flex flex-wrap gap-2">
                <div v-for="country in filmInfo.countries" class="info-item-value">{{ country.country }}</div>
              </div>
            </div>
            <div v-if="filmInfo.genres.length" class="info-item-block">
              <div class="info-item">Жанр</div>
              <div class="flex flex-wrap gap-2">
                <div v-for="genre in filmInfo.genres" class="info-item-value">{{ genre.genre }}</div>
              </div>
            </div>
            <div v-if="filmInfo.year" class="info-item-block">
              <div class="info-item">Дата выхода</div>
              <div class="info-item-value">{{ filmInfo.year }}</div>
            </div>
            <div v-if="filmInfo.slogan" class="slogan">
              {{ filmInfo.slogan }}
            </div>
          </div>
          <div class="flex flex-col gap-y-4">
            <div v-if="filmInfo.ratingImdb" class="rating-item">
              <span>IMDB</span>
               <span>{{ filmInfo.ratingImdb }}</span>
            </div>
            <div v-if="filmInfo.ratingKinopoisk" class="rating-item">
              <span>Kinopoisk</span>
              <span>{{ filmInfo.ratingKinopoisk }}</span>
            </div>
            <div v-if="filmInfo.ratingRfCritics" class="rating-item">
              <span>Russian critics</span>
              <span>{{ filmInfo.ratingRfCritics }}</span>
            </div>
            <div v-if="filmInfo.ratingFilmCritics" class="rating-item">
              <span>World critics</span>
              <span>{{ filmInfo.ratingFilmCritics }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <iframe :src="iframeSrc" allowfullscreen class="w-screen h-screen"></iframe>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import {computedAsync} from "@vueuse/core";
import {getOneFilm} from "@/Services/MoviesService";
import {getPoster} from "@/Helpers/PosterHelper";
import {getFullInfo, getTrailer} from "@/Services/KpService";

const router = useRouter();

const film = computedAsync(async () => {
  const response = await getOneFilm(router.currentRoute.value.params.id);
  return response.data;
});

const posterLink = computedAsync(async () => await getPoster(film.value));

const filmInfo = computedAsync(async () => {
  if (!film.value.kinopoisk_id) return;
  const response = await getFullInfo(film.value.kinopoisk_id);
  console.log(response.data)
  return response.data;
});

const iframeSrc = computed(() => film.value.iframe_src)
</script>

<style scoped>
.info-container {
  @apply w-screen h-screen flex flex-col items-center p-8;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}

.info-item-block {
  @apply text-xl w-full rounded-full p-2 flex flex-row justify-between;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}

.slogan {
  @apply text-xl w-full flex items-center justify-center rounded-full h-14;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}

.info-item {
  @apply py-2 rounded-full bg-[#ec3d08] w-36 mr-2 h-fit text-center;
}

.info-item-value {
  @apply py-2 rounded-full bg-[#7a7575] w-44 text-center;
}

.rating-item {
  @apply w-72 h-1/4 rounded-3xl flex items-center justify-between text-3xl p-4;
  border: 2px solid white;
  background: #ec3d08;
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}

.description {
  @apply mb-12 flex items-center rounded-3xl justify-center p-8;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}
</style>