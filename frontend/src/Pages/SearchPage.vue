<template>
  <img v-if="download" src="../assets/icons/loading.svg" alt="logo" width="150" class="animate-spin" />
  <div v-else class="w-full p-8 main-content">
    <h2 v-if="foundContent.length === 0" class="text-center text-3xl">По запросу "{{ props.query }}" ничего не найдено</h2>
    <div v-else class="flex flex-wrap gap-20">
      <MyCard v-for="(film, index) in foundContent" :key="index" :media="film" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyCard from "@/Components/MyCard.vue";
import { computedAsync } from "@vueuse/core";
import { searchMedia } from "@/Services/MoviesService";
import { ref } from "vue";

const props = defineProps<{ query: string }>();

const download = ref(true);

const foundContent = computedAsync<[]>(async () => {
  const res = await searchMedia(props.query);
  download.value = false;
  return res.data;
}, []);
</script>

<style scoped>

</style>