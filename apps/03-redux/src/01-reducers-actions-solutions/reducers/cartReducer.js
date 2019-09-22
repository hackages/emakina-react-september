export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

/**
 * @param itemId: id of the item you wish to add to your cart
 */
export const addToCart = itemId => ({
  type: ADD_ITEM_TO_CART,
  payload: itemId
});

/**
 * @param itemId: id of the item you wish to remove from your cart
 */
export const removeFromCart = itemId => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const initialState = {
  products: [],
  count: 0,
  isOpen: false
};

const isInCart = (products, id) =>
  products.reduce((result, nextId) => (result ? result : nextId === id), false);

const reducer = {
  [ADD_ITEM_TO_CART]: (state, payload) => {
    const products = isInCart(state.products, payload)
      ? state.products
      : [...state.products, payload];

    const count = products.length;
    return {
      ...state,
      previousState: state,
      count,
      products
    };
  },
  [REMOVE_ITEM_FROM_CART]: (state, payload) => {
    const products = state.products.filter(nextElement => nextElement !== payload);

    const count = products.length;

    return {
      ...state,
      previousState: state,
      count,
      products
    };
  },
  [TOGGLE_CART]: state => ({
    ...state,
    isOpen: !state.isOpen
  })
};

export const cart = (state = initialState, action = {}) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
