import { IAPIListingResponse } from "~/types/IAPIListingResponse";
import { IMovieOrTvShow } from "~/types/IMovieOrTvSHow";

const state = reactive({
  trending: [] as IMovieOrTvShow[],
  pagination: 1,
});

export const useTrending = () => {
  const config = useRuntimeConfig();
  const trendingUrl =
    config.public.baseUrl + "/trending/all/week?api_key=" + config.public.key;

  const fetchTrending = async () => {
    const trending = await $fetch<IAPIListingResponse<IMovieOrTvShow>>(
      trendingUrl
    );
    state.trending = trending.results;
    state.pagination = trending.page;
  };

  const getTrending = computed(() => state.trending);

  return { fetchTrending, getTrending };
};
