<script setup lang="ts">
const { fetchPopularMovies, getPopularMovies } = usePopularMovies();

onMounted(() => fetchPopularMovies());
</script>

<template>
  <div class="flex flex-wrap justify-center items-center">
    <div
      v-for="popularMovie in getPopularMovies"
      :key="popularMovie.id"
      class="h-[750px] m-5"
    >
      <Card
        :overview="popularMovie.overview"
        :title="popularMovie.title"
        :vote-average="popularMovie.vote_average"
        :poster-path="popularMovie.poster_path"
      />
    </div>
  </div>
</template>
