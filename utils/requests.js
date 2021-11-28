const API_kEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    fetchTrending: {
      title: "Trending",
      url: `/trending/all/week?api_key=${API_kEY}&language-en-US`,
    },
  },
  {
    fetchTopRated: {
      title: "Top Rated",
      url: `/movie/top_rated?api_keys=${API_kEY}}&language-en-US`,
    },
  },
  {
    fetchActionMovies: {
      title: "Action",
      url: `/discover/movie?api_keys=${API_kEY}}with-genres=28`,
    },
  },
  {
    fetchComedyMovies: {
      title: "Comedy",
      url: `/discover/movie?api_keys=${API_kEY}}&with-genres-35`,
    },
  },
  {
    fetchHorrorMovies: {
      title: "Horror",
      url: `/discover/movie?api_keys=${API_kEY}}&with-genres-27`,
    },
  },
  {
    fetchRomanticMovies: {
      title: "Romance",
      url: `/discover/movie?api_keys=${API_kEY}}&with-genres-10749`,
    },
  },
  {
    fetchMystery: {
      title: "Mystery",
      url: `/discover/movie?api_keys=${API_kEY}}&with-en-9648`,
    },
  },
  {
    fetchSciFi: {
      title: "Sci-Fi",
      url: `/discover/movie?api_keys=${API_kEY}}&with-en-878`,
    },
  },
  {
    fetchWestern: {
      title: "Western",
      url: `/discover/movie?api_keys=${API_kEY}}&with-en-37`,
    },
  },
  {
    fetchAnimation: {
      title: "Animation",
      url: `/discover/movie?api_keys=${API_kEY}}&with-en-16`,
    },
  },
  {
    fetchTV: {
      title: "TV Movie",
      url: `/discover/movie?api_keys=${API_kEY}}&with-en-10770`,
    },
  },
];
