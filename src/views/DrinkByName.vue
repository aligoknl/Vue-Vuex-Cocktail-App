<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-green-500">
      Search Drinks by Name
    </h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Drinks"
      @change="searchDrinks"
    />
  </div>

  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

const route = useRoute();
const keyword = ref("");
const drinks = computed(() => store.state.searchedDrinks);

function searchDrinks() {
  if (keyword.value) {
    store.dispatch("searchDrinks", keyword.value);
  } else {
    store.commit("setSearchedDrinks", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchDrinks();
  }
});
</script>
