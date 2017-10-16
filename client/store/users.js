import axios from 'axios';
import history from '../history';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_USERS';
const CREATE = 'CREATE_USER';
const UPDATE = 'UPDATE_USER';
const REMOVE = 'REMOVE_USER';

/* ------------   ACTION CREATORS     ------------------ */

const init = users => ({ type: INITIALIZE, users });
const create = user => ({ type: CREATE, user });
const remove = id => ({ type: REMOVE, id });
const update = user => ({ type: UPDATE, user });

/* ------------       REDUCERS     ------------------ */

export default function reducer(users = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.users;

    case CREATE:
      return [action.user, ...users];

    case REMOVE:
      return users.filter(user => user.id != action.id);

    case UPDATE:
      return users.map(user => (action.user.id === user.id ? action.user : user));

    default:
      return users;
  }
}

/* ------------   THUNK CREATORS     ------------------ */


export const fetchUsers = () => dispatch => {
  axios
    .get('/api/users')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching users unsuccessful', err));
};

export const fetchUser = id => dispatch => {
  axios
    .get(`/api/user/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching users unsuccessful', err));
};

export const removeUser = id => dispatch => {
  axios
    .delete(`/api/user/${id}`)
    .then(res => dispatch(remove(id)))
    .catch(err => console.error(`Removing user: ${id} unsuccessful`, err));
};

export const addUser = user => dispatch => {
  axios
    .post('/api/user', user)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating user: ${user} unsuccessful`, err));
};

export const updateUser = (id, user) => dispatch => {
  axios
    .put(`/api/users/${id}`, user)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating user: ${user} unsuccessful`, err));
};
