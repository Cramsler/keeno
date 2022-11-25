<template>
  <div class="my-button-container">
    <button class="my-button" @click="emit('downloadMore')">Загрузить ещё!</button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["downloadMore"])
</script>

<style scoped>
.my-button-container {
  @apply w-full flex items-center justify-center mt-14;
}

.my-button {
  @apply py-4 px-8 bg-[#ec3d08] hover:bg-[#ee592f] rounded-full;
}
</style>