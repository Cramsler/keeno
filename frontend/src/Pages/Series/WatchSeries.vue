<template>
  <div class="flex flex-row w-full p-8 mb-24 justify-center gap-36">
    <img :src="filmInfo.Poster" alt="poster" width="300">
    <div>
      <h1 class="mb-8 text-lg">{{film.ru_title}}</h1>
      <div class="flex flex-col gap-y-8">
        <p>{{filmInfo.Plot}}</p>
        <p>Страна:  {{filmInfo.Country}}</p>
        <p>Жанр:  {{filmInfo.Genre}}</p>
        <p>Дата выхода:  {{filmInfo.Released}}</p>
        <p>Актеры:  {{filmInfo.Actors}}</p>
      </div>
    </div>
  </div>

  <h1 v-if="!iframeSrc" class="text-center">Загрузка плеера</h1>
  <iframe v-else :src="iframeSrc" allowfullscreen width="854" height="480"></iframe>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import {computedAsync} from "@vueuse/core";
import {getOneSeries} from "@/Services/MoviesService";
import {getFullInfo} from "@/Services/ImdbService";

const router = useRouter();

const film = computedAsync(async () => {
  const response = await getOneSeries(router.currentRoute.value.params.id);
  return response.data.data[0];
});

const filmInfo = computedAsync( async () => {
  const response = await getFullInfo(film.value.imdb_id);
  console.log(response.data)
  return response.data;
});

const iframeSrc = computed(() => film.value.iframe_src)
</script>

<style scoped>

</style>