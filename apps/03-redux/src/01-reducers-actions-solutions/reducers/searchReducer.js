export const SELECT_TAB = 'SELECT_TAB';
export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';


/**
 * @param searchTerm: search term
 */
export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH_VALUE,
  payload: searchTerm
});

/**
 * @param genre: a genre you want to filter by
 */
export const selectTab = genre => ({
  type: SELECT_TAB,
  payload: genre
});


export const initialState = {
  searchValue: '',
  selectedFilter: 'All'
};

const reducer = {
  [UPDATE_SEARCH_VALUE]: (state, searchValue) => ({
    ...state,
    searchValue
  }),
  [SELECT_TAB]: (state, category) => ({
    ...state,
    selectedFilter: category
  })
};

export const search = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
