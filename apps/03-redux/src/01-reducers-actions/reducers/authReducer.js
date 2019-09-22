// ---------- ACTION TYPES --------
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// ---------- ACTION CREATORS --------
/**
 * @param token: auth token
 */
export const login = token => {};

export const logout = () => {};

// ---------- REDUCER --------
export const initialState = {
  loggedIn: false,
  token: null
};

export const auth = (state, action) => {};
