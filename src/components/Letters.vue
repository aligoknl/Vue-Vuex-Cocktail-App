<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-green-500">Drinks by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const { letters } = defineProps({
  letters: {
    required: true,
    type: Array,
  },
});
</script>
