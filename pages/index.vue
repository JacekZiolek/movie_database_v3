<script setup lang="ts">
const { fetchTrending, getTrending } = useTrending();

onMounted(() => fetchTrending())
</script>

<template>
  <div class="flex flex-wrap justify-center items-center">
    <div
      v-for="trending in getTrending"
      :key="trending.id"
      class="h-[750px] m-5"
    >
      <Card
        :overview="trending.overview"
        :title="trending.title ? trending.title : trending.name"
        :vote-average="trending.vote_average"
        :poster-path="trending.poster_path"
      />
    </div>
  </div>
</template>
