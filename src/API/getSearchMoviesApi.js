const getSearchMoviesApi = async (query, page = 1) => {
  const key = '32abbe5f20cc57659aefd6abb0b04352';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};

export default getSearchMoviesApi;
