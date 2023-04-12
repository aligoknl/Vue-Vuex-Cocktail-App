<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all p-2 m-2"
  >
    <router-link
      :to="{
        name: 'byCategory',
        params: { id: category.strCategory },
      }"
    >
      <h3 class="font-bold">{{ category.strCategory }}</h3>
    </router-link>
  </div>
</template>
<script setup>
const { category } = defineProps({
  category: {
    required: true,
    type: Object,
  },
});
</script>
