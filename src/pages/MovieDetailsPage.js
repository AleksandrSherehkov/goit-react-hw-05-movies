import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import getMovieDetailsApi from 'API/getMovieDetailsApi';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

const Cast = lazy(() => import('./CastPage.js'));
const Reviews = lazy(() => import('./ReviewsPage.js'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetailsApi(movieId)
      .then(
        ({
          original_title,
          genres,
          overview,
          poster_path,
          release_date,
          vote_average,
          vote_count,
        }) => {
          const movieInfo = {
            title: original_title,
            genres: genres,
            description: overview,
            poster: poster_path,
            releaseDate: Number.parseInt(release_date),
            voteAverage: vote_average?.toFixed(2),
            voteCount: vote_count,
          };

          return setMovieInfo(movieInfo);
        }
      )
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
