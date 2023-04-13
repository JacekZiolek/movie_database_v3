import { IAPIListingResponse } from "~/types/IAPIListingResponse";
import { IPopularTvShows } from "~/types/IPopularTvShows";

const state = reactive({
  tvShows: [] as IPopularTvShows[],
  pagination: 1,
});

export const usePopularTvShows = () => {
  const config = useRuntimeConfig();
  const popularTvShowsUrl =
    config.public.baseUrl + "/tv/popular?api_key=" + config.public.key;

  const fetchPopularTvShows = async () => {
    const popular = await $fetch<IAPIListingResponse<IPopularTvShows>>(
      popularTvShowsUrl
    );
    console.log("popular", popular)
    state.tvShows = popular.results;
    state.pagination = popular.page;
  };

  const getPopularTvShows = computed(() => state.tvShows);

  return { fetchPopularTvShows, getPopularTvShows };
};
