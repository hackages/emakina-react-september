// ---------- ACTION TYPES --------

export const SELECT_TAB = 'SELECT_TAB';
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';

// ---------- ACTION CREATORS --------

/**
 * @param searchTerm: search term
 */
export const updateSearch = searchTerm => {};

/**
 * @param genre: a genre you want to filter by
 */
export const selectTab = genre => {};

// ---------- REDUCER --------

export const initialState = {
  searchValue: '',
  selectedFilter: 'All'
};

export const search = (state, action) => {};
