<template>
  <router-link :to="{name: getRouteName(props.media.content_type), params: {id: props.media.id}}" class="card">
    <img :src="posterLink" alt="film-poster" class="card-image" />
    <div class="card-title__container">
      <span>{{ props.media.ru_title }}</span>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { match } from "ts-pattern";
import { ContentTypeEnum } from "@/Types/ContentTypeEnum";
import { RouterNames } from "@/router/RouterNames";
import { getPoster } from "@/Helpers/PosterHelper";
import { computedAsync } from "@vueuse/core";

const props = defineProps<{
  media: {};
}>();

const posterLink = computedAsync(async () => await getPoster(props.media));

function getRouteName(type: string) {
  return match(type)
      .with(ContentTypeEnum.MOVIE, () => RouterNames.WATCH_MOVIE)
      .with(ContentTypeEnum.TV_SERIES, () => RouterNames.WATCH_SERIES)
      // .with("anime_tv_series", () => RouterNames.WATCH_ANIME_SERIES)
      .otherwise(() => RouterNames.WATCH_SERIES);
}
</script>

<style scoped>
.card {
  @apply relative w-60 h-80 rounded-xl overflow-hidden;
  transition: 0.2s;
}

.card-title__container {
  @apply absolute -bottom-24 left-0 p-6 w-full h-max;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  transition: 0.2s;
}

.card-image {
  @apply w-full h-full;
  transition: 0.2s;
}

.card:hover .card-title__container{
  @apply bottom-0;
}

.card-image:hover {
  transform: scale(1.1);
}
</style>