// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_API_BASE_URL,
      key: process.env.NUXT_TMDB_API_KEY,
    },
  },
});
