<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-green-500">Pick a Category</h1>
  </div>
  <div v-for="category in categories" :key="category">
    <Categories :categories="category" />
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Categories from "../components/Categories.vue";
import axiosClient from "../axiosClient.js";

const route = useRoute();
const categories = ref([]);
// watch(route, () => {
//   store.dispatch("searchDrinkssByCategory", route.params.id);
// });
onMounted(async () => {
  axiosClient
    .get(`list.php?c=list`)

    .then(({ data }) => categories.value.push(data.drinks));
  // .then((data) => {
  //   console.log(data.data);
  // });
});
</script>
