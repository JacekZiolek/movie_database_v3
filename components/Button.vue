<script setup lang="ts">
defineProps<{
    text?: string
}>()
</script>

<template>
    <button class="bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 mx-2 rounded-xl h-12 w-32">{{ text }}</button>
</template>