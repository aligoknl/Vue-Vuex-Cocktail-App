<template>
  <div class="p-8 pb-0 text-green-500">
    <h1 class="text-4xl font-bold mb-4">Random Drinks</h1>
  </div>
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import Drinks from "../components/Drinks.vue";
import axiosClient from "../axiosClient.js";
const drinks = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => drinks.value.push(data.drinks[0]));
  }
});
</script>
