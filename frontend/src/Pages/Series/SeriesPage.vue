<template>
  <div class="grid grid-cols-4 gap-20">
    <MyCard v-for="(series, index) in allSeries.data" :key="index" :media="series" />
  </div>

  <ButtonMore @downloadMore="downloadMore" />
</template>

<script lang="ts" setup>
import ButtonMore from "@/Components/MyButtonMore.vue";
import {computedAsync} from "@vueuse/core";
import {getAllSeries} from "@/Services/MoviesService";
import MyCard from "@/Components/MyCard.vue";
import {RouterNames} from "@/router/RouterNames";

const allSeries = computedAsync<[]>(async () => {
  const { data } = await getAllSeries();
  return data;
}, []);

async function downloadMore() {
  const { data } = await getAllSeries(allSeries.value.current_page+=1);
  data.data.map((film) => {
    allSeries.value.data.push(film);
  });
}
</script>

<style scoped>

</style>