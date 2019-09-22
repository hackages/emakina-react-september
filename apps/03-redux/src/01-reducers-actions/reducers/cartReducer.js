// ---------- ACTION TYPES --------
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

// ---------- ACTION CREATORS --------

/**
 * @param itemId: id of the item you wish to add to your cart
 */
export const addToCart = itemId => {};

/**
 * @param itemId: id of the item you wish to remove from your cart
 */
export const removeFromCart = itemId => {};

export const toggleCart = () => {};

// ---------- REDUCER --------

export const initialState = {
  products: [],
  count: 0,
  isOpen: false
};

export const cart = (state, action) => {};
