<template>
  <div class="max-w-[800px] mx-auto p-5">
    <h1 class="text-4xl font-bold mb-5 text-green-500">
      {{ drink.strDrink }}
    </h1>
    <img
      :src="drink.strDrinkThumb"
      :alt="drink.strDrink"
      class="max-w-[100%]"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ drink.strCategory }}
      </div>
      <div v-if="drink.strTags">
        <strong class="font-bold">Tags:</strong> {{ drink.strTags }}
      </div>
    </div>

    <div class="my-3 text-justify">
      {{ drink.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)">
            <li v-if="drink[`strIngredient${index + 1}`]" :key="index">
              > {{ drink[`strMeasure${index + 1}`] }}
              {{ drink[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div></div>
      <div v-if="drink.strVideo" class="mt-4">
        <YouTubeButton :href="drink.strVideo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const drink = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    drink.value = data.drinks[0] || {};
  });
});
</script>
