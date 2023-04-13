import { IAPIListingResponse } from "~/types/IAPIListingResponse";
import { IPopularMovies } from "~/types/IPopularMovies";

const state = reactive({
  movies: [] as IPopularMovies[],
  pagination: 1,
});

export const usePopularMovies = () => {
  const config = useRuntimeConfig();
  const popularMoviesUrl =
    config.public.baseUrl + "/movie/popular?api_key=" + config.public.key;

  const fetchPopularMovies = async () => {
    const popular = await $fetch<IAPIListingResponse<IPopularMovies>>(
      popularMoviesUrl
    );
    console.log("popular", popular)
    state.movies = popular.results;
    state.pagination = popular.page;
  };

  const getPopularMovies = computed(() => state.movies);

  return { fetchPopularMovies, getPopularMovies };
};
