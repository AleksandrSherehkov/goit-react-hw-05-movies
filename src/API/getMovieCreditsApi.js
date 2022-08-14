const getMovieCreditsApi = async movieId => {
  const key = '32abbe5f20cc57659aefd6abb0b04352';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};

export default getMovieCreditsApi;
