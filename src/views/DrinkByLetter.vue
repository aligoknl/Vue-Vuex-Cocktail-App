<template>
  <Letters :letters="letters" />
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";
import Letters from "../components/Letters.vue";

const route = useRoute();
const drinks = computed(() => store.state.drinksByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

watch(route, () => {
  store.dispatch("searchDrinksByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchDrinksByLetter", route.params.letter);
});
</script>
