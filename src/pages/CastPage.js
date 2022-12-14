import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCreditsApi from 'API/getMovieCreditsApi';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCreditsApi(movieId)
      .then(({ cast }) => {
        const actorsArr = [];

        cast?.map(({ id, name, profile_path }) => {
          const actor = {
            id,
            name,
            photo: profile_path,
          };

          return actorsArr.push(actor);
        });

        setActors(actorsArr);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return actors && <CastList actors={actors} />;
};

export default Cast;
