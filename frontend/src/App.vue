<template>
  <div class="flex flex-col items-center">
    <MyHeader ref="header" />
    <div class="w-full main-content">
      <RouterView />
    </div>
  </div>
  <GoUpButton :hidden="headerVisibility" @click="goUp" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MyHeader from "@/Components/MyHeader.vue";
import { ref } from "vue";
import GoUpButton from "@/Components/MyGoUpButton.vue";
import { useElementVisibility } from "@vueuse/core";

const header = ref(null);

const headerVisibility = useElementVisibility(header);

function goUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.main-content {
  @apply flex items-center flex-col;
}
</style>
