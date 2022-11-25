<template>
  <div class="flex flex-col items-center">
    <MyHeader @search="search" />
    <div v-if="!foundContent" class="w-full main-content">
      <RouterView />
    </div>

    <div v-else class="w-full p-8 main-content">
      <div class="flex flex-wrap gap-20">
        <MyCard v-for="(film, index) in foundContent" :key="index" :media="film" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MyHeader from "@/Components/MyHeader.vue";
import {ref} from "vue";
import MyCard from "@/Components/MyCard.vue";
import {searchMedia} from "@/Services/MoviesService";
import {RouterNames} from "@/router/RouterNames";
import {match} from "ts-pattern";
import {ContentTypeEnum} from "@/Types/ContentTypeEnum";

const foundContent = ref();

async function search(searchString: string) {
  const res = await searchMedia(searchString);
  foundContent.value = res.data;
}
</script>

<style scoped>
.main-content {
  @apply flex items-center flex-col;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}
</style>
