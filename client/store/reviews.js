import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_REVIEWS = 'GET_REVIEWS';

/* ------------   ACTION CREATORS     ------------------ */

const getReviews = reviews => ({ type: GET_REVIEWS, reviews });

/* ------------       REDUCERS     ------------------ */

export default function reducer(reviews = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return reviews;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchReviews = (id) => dispatch => {
  axios
    .get(`/api/reviews/product/${id}`)
    .then(res => dispatch(getReviews(res.data)))
    .catch(err => console.error('Fetching product reviews unsuccessful', err));
};

export const fetchUserReviews = (id) => dispatch => {
  axios
    .get(`/api/reviews/user/${id}`)
    .then(res => dispatch(getReviews(res.data)))
    .catch(err => console.error('Fetching user reviews unsuccessful', err));
};
