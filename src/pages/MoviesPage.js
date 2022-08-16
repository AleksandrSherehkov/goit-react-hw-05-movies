import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getSearchMoviesApi from 'API/getSearchMoviesApi';
import SearchBar from 'components/SearchBar/SearchBar';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      getSearchMoviesApi(query)
        .then(({ results }) => {
          const moviesArr = [];

          results.map(({ id, original_title, poster_path, vote_average, vote_count }) => {
            const movie = {
              id,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average?.toFixed(2),
              voteCount: vote_count,
            };

            return moviesArr.push(movie);
          });

          setMovies(moviesArr);
        })
        .catch(err => console.log(err));
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies && (
        <Container isPadding>
          <MoviesList movies={movies} />
        </Container>
      )}
    </>
  );
};

export default MoviesPage;
