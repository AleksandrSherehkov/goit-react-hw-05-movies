const getMovieReviewsApi = async movieId => {
  const key = '32abbe5f20cc57659aefd6abb0b04352';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};

export default getMovieReviewsApi;
