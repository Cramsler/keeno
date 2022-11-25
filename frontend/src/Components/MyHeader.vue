<template>
  <div class="header">
    <div class="w-1/3">
      <router-link :to="{name: RouterNames.HOME}">
        <img src="../assets/icons/logo.svg" alt="logo" width="150">
      </router-link>
    </div>

    <ul class="header-category__list">
      <router-link  v-for="(category, index) in categoryList" :key="index" :to="{name: category.link}">
        <li class="header-category__item">
          {{ category.title }}
        </li>
      </router-link>
    </ul>

    <div class="w-1/3 flex justify-end relative overflow-hidden">
      <div class="header-search">
        <input type="text" class="header-search__input" v-model="searchInput">
        <img src="../assets/icons/search.svg" alt="search" width="20">
        <button class="search-button" @click="goSearch">Найти</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {RouterNames} from "@/router/RouterNames";

const emit = defineEmits(["search"]);

const searchInput = ref("");

const categoryList = computed(() => {
  return [
    { title: "Фильмы", link: RouterNames.HOME },
    { title: "Сериалы", link: RouterNames.SERIES },
    { title: "Аниме", link: RouterNames.ANIME },
    { title: "ТВ-шоу", link: RouterNames.SHOW }
  ]
});

const searchButtonPosition = computed(() => searchInput.value ? "0" : "-15rem");

function goSearch() {
  emit('search', searchInput.value);
  searchInput.value = "";
}

</script>

<style scoped>
.header {
  @apply flex items-center justify-between w-full mb-10 p-6;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}

.header-search {
  @apply w-max flex flex-row items-center justify-between rounded-full py-2 px-3;
  background: #18181AFF;
}

.header-search__input {
  @apply w-0;
  background: none;
  transition: 0.2s;
  outline: none;
}

.header-search__input:focus {
  width: 300px;
  padding-right: 100px;
  @apply mr-2;
}

.header-search:hover .header-search__input {
  width: 300px;
  padding-right: 100px;
  @apply mr-2;
}

.header-category__list {
  @apply w-1/3 flex flex-row list-none justify-between;
}

.header-category__item {
  @apply text-[#ffffff] hover:text-[#ec3d08];
}

.search-button {
  transition: 0.2s;
  @apply py-2 px-8 bg-[#ec3d08] hover:bg-[#ee592f] rounded-full absolute -right-28;
}

.header-search:hover .search-button {
  right: v-bind(searchButtonPosition);
}

.header-search__input:focus ~ .search-button {
  right: v-bind(searchButtonPosition);
}
</style>