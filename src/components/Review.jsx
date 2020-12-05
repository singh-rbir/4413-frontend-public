import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import * as bookService from '../services/bookService';
import * as userService from '../services/userService';
import { ToastContainer, toast } from 'react-toastify';

const Review = (props) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [reviewList, setReviewList] = useState([]);

  const onChangeRating = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  const onChangeReview = (event) => {
    setMessage(event.target.value);
  };
  const addReview = async () => {
    console.log(rating);
    const review = {
      bid: props.bid,
      userId: currentUser.userId,
      stars: rating,
      message: message,
    };
    console.log(review);
    const result = await bookService.addReview(review);
    if (result.data.status === 0) {
      setRating(0);
      setMessage('');
    } else {
      toast.error(`${result.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(result);
  };
  useEffect(() => {
    const user = userService.getCurrentUser();
    setCurrentUser(JSON.parse(user));
    const timeoutId = setTimeout(async () => {
      const result = await bookService.getReviewList(props.bid);
      setReviewList(result.data);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  return (
    <div className="review__section">
      <hr />
      {currentUser !== null ? (
        <>
          <p>Add Review</p>
          <div className="add__review">
            <label>Enter your Review</label>
            <input
              type="text"
              value={message}
              placeholder="Enter your Review"
              onChange={onChangeReview}
            />

            <StarRatingComponent
              name="rating"
              starCount={5}
              starColor="blue"
              value={rating}
              onStarClick={onChangeRating}
              className="star__component"
            />
            <button onClick={addReview}>Add Review</button>
            <hr />
          </div>
        </>
      ) : (
        <> </>
      )}

      <div className="all__review">
        <p>All Reviews</p>
        <div className="review__list">
          {reviewList.map((data) => (
            <div key={data.reviewId}>
              <div className="reviews">
                <p>
                  {data.message}{' '}
                  <span>
                    <StarRatingComponent
                      name="rating"
                      starCount={5}
                      starColor="blue"
                      value={data.stars}
                    />
                  </span>
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="notification"
      />
    </div>
  );
};

export default Review;
