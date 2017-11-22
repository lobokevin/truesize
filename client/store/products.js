import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_PRODUCTS';
const CREATE = 'CREATE_PRODUCT';
export const REMOVE = 'REMOVE_PRODUCT';
const UPDATE = 'UPDATE_PRODUCT';
const UPDATE_SIZE = 'UPDATE_SIZE';

/* ------------   ACTION CREATORS     ------------------ */

const init = products => ({ type: INITIALIZE, products });
const create = product => ({ type: CREATE, product });
const remove = id => ({ type: REMOVE, id });
const update = product => ({ type: UPDATE, product });
const updateSize = size => ({type: UPDATE_SIZE, size});

/* ------------       REDUCER     ------------------ */

export default function reducer(products = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.products;
    case CREATE:
      return [action.product, ...products];
    case REMOVE:
      return products.filter(product => product.id !== action.id);
    case UPDATE:
      return products.map(
        product =>
          action.product.id === product.id ? action.product : product
      );

      case UPDATE_SIZE:
      return products.filter( product => product.size === action.size);
    default:
      return products;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchProducts = () => dispatch => {
  axios
    .get('/api/products')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Error fetching products', err));
};

export const updateSizeThunk = (size) => dispatch => {
  dispatch(updateSize(size));
};

export const removeProduct = id => dispatch => {
  axios
    .delete(`/api/products/${id}`)
    .then(dispatch(remove(id)))
    .catch(err => console.error(`Removing product: ${id} unsuccesful`, err));
};

export const addProduct = product => dispatch => {
  axios
    .post('/api/products', product)
    .then(res => {
      dispatch(create(res.data));
    })
    .catch(err => console.error(`Creating product: ${product} unsuccesful`, err));
};

export const updateProduct = (id, product) => dispatch => {
  axios
    .put(`/api/products/${id}`, product)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating product: ${product} unsuccesful`, err));
};
