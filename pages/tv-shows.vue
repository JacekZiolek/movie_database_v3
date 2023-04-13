<script setup lang="ts">
const { fetchPopularTvShows, getPopularTvShows } = usePopularTvShows();

onMounted(() => fetchPopularTvShows());
</script>

<template>
  <div class="flex flex-wrap justify-center items-center">
    <div
      v-for="popularTvShow in getPopularTvShows"
      :key="popularTvShow.id"
      class="h-[750px] m-5"
    >
      <Card
        :overview="popularTvShow.overview"
        :title="popularTvShow.name"
        :vote-average="popularTvShow.vote_average"
        :poster-path="popularTvShow.poster_path"
      />
    </div>
  </div>
</template>
