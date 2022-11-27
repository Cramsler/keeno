<template>
  <div class="my-button-container">
    <button class="my-button" @click="emit('downloadMore')">
      <span v-if="!props.download">Загрузить ещё!</span>
      <span v-else class="flex">
        Загрузка
        <img src="../assets/icons/loading.svg" alt="logo" width="25" class="animate-spin ml-2" />
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  download: boolean;
}>();
const emit = defineEmits(["downloadMore"]);
</script>

<style scoped>
.my-button-container {
  @apply w-full flex items-center justify-center mt-14;
}

.my-button {
  @apply py-4 px-8 bg-[#ec3d08] hover:bg-[#ee592f] rounded-full;
}
</style>