<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-7 px-8">
    <CategoryItem
      v-for="category of categories"
      :key="category.idCategory"
      :category="category"
    />
  </div>
  <div v-if="!categories" class="flex justify-center text-gray-600 p-8">
    There are no categories
  </div>
</template>

<script setup>
import CategoryItem from "./CategoryItem.vue";

const { categories } = defineProps({
  categories: {
    required: true,
    type: Array,
  },
});
</script>
