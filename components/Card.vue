<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps<{
  posterPath?: string;
  overview: string;
  title: string;
  voteAverage: number;
}>();

const getPosterUrl = () => {
  return `https://image.tmdb.org/t/p/w500/${props.posterPath}`;
};
</script>

<template>
  <div
    class="flex flex-col justify-between items-center h-full max-w-sm rounded overflow-hidden shadow-lg bg-slate-600"
  >
    <img class="w-full" :src="getPosterUrl()" alt="poster" />
    <div class="px-6 py-4 flex justify-center">
      <div class="font-bold text-xl text-white mb-2">
        {{ props.title }}
      </div>
    </div>
    <div class="flex justify-center pb-5">
      <div v-for="n in 10" :key="n" class="inline">
        <ClientOnly>
          <FontAwesomeIcon
            :icon="['fas', 'star']"
            :color="n > props.voteAverage ? 'gray' : 'yellow'"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
