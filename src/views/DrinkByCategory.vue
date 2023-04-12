<template>
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

const route = useRoute();
const drinks = computed(() => store.state.drinksByCategory);

onMounted(() => {
  store.dispatch("searchDrinksByCategory", route.params.id);
});
</script>
