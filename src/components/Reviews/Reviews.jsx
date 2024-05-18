import BookingForm from '../Form/BookingForm';
import StarRating from '../StarsRating/StarsRating';
import {
  FirstInitial,
  FirstInitialCover,
  ReviewComment,
  ReviewItem,
  ReviewList,
  ReviewerNameAndStars,
  ReviewerRate,
  ReviewsContainer,
} from './Reviews.styled.jsx';

export default function Reviews({ kamps }) {
  return (
    <ReviewsContainer>
      <ReviewList>
        {kamps.reviews.map((review, index) => (
          <li key={index}>
            <ReviewItem>
              <ReviewerRate>
                <FirstInitialCover>
                  <FirstInitial>{review.reviewer_name.charAt(0)}</FirstInitial>
                </FirstInitialCover>
                <ReviewerNameAndStars>
                  <h3> {review.reviewer_name}</h3>
                  <div>
                    <StarRating rating={review.reviewer_rating} />
                  </div>
                </ReviewerNameAndStars>
              </ReviewerRate>

              <ReviewComment>{review.comment}</ReviewComment>
            </ReviewItem>
          </li>
        ))}
      </ReviewList>
      <BookingForm />
    </ReviewsContainer>
  );
}
