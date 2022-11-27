<template>
  <button class="go-up-button">
    <img src="../assets/icons/arrow.svg" alt="logo" class="w-10" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ hidden: boolean }>();

const rightPosition = computed<string>(() => (props.hidden ? "-10rem" : "5rem"));
</script>

<style scoped>
.go-up-button {
  @apply fixed z-10 bottom-8 flex items-center justify-center w-20 h-20 rounded-full bg-[#ec3d08] hover:bg-[#ee592f];
  right: v-bind(rightPosition);
  transition: 0.3s;
}
</style>