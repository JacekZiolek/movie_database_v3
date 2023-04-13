<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav
    class="flex justify-between content-center items-center bg-stone-900 p-5 h-32"
  >
    <div class="flex justify-around w-60">
      <NuxtLink to="/">
        <ClientOnly>
          <FontAwesomeIcon icon="home" color="#155e75" size="xl" />
        </ClientOnly>
      </NuxtLink>
      <NuxtLink to="/movies">
        <ClientOnly>
          <FontAwesomeIcon icon="film" color="#155e75" size="xl" />
        </ClientOnly>
      </NuxtLink>
      <NuxtLink to="/tv-shows">
        <ClientOnly>
          <FontAwesomeIcon icon="tv" color="#155e75" size="xl" />
        </ClientOnly>
      </NuxtLink>
    </div>
    <div class="flex flex-nowrap">
      <input
        type="text"
        value="search"
        class="relative h-10 w-96 m-0 px-3 py-1.5 -mr-px border border-solod border-neutral-400 rounded-l-xl bg-slate-600 bg-clip-padding font-normal text-white outline-none"
      />
      <button
        class="relative bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-r-xl h-10 w-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 p-0 m-0"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <img src="../../tmdblogo.svg" alt="tmdb logo" class="w-60" />
  </nav>
</template>
