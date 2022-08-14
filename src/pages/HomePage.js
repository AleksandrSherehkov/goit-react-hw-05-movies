import { useState, useEffect } from 'react';
import getTrendingApi from 'API/getTrendingApi';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingApi().then(({ results }) => {
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
    });
  }, []);

  return (
    movies && (
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#c7d4ed' }}>
          TRENDING TODAY
        </h1>
        <MoviesList movies={movies} />
      </Container>
    )
  );
};

export default HomePage;
