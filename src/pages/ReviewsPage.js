import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviewsApi from 'API/getMovieReviewsApi';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import Container from 'components/Container/Container';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsApi(movieId)
      .then(({ results }) => {
        const reviewsArr = [];

        results?.map(({ id, author, content }) => {
          const review = {
            id,
            author,
            text: content,
          };

          return reviewsArr.push(review);
        });

        setReviews(reviewsArr);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ReviewsList reviews={reviews} />
  ) : (
    <Container isPadding>
      <h2>We don't have any reviews for this movie.</h2>
    </Container>
  );
};

export default Reviews;
