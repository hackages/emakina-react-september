import {initialState, search, SELECT_TAB, UPDATE_SEARCH_VALUE} from '../../reducers/searchReducer';

describe('Search Reducer', () => {
  it('should be a function', () => {
    expect(typeof search).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(search(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should update the search value', () => {
    const expectedValue = 'l';
    const expectedValue2 = 'la';
    const action = {
      type: UPDATE_SEARCH_VALUE,
      payload: 'l'
    };

    const action2 = {
      type: UPDATE_SEARCH_VALUE,
      payload: 'la'
    };

    [search(undefined, action)]
      .map(nextState => {
        expect(nextState.searchValue).toEqual(expectedValue);
        return search(nextState, action2);
      })
      .map(nextState => expect(nextState.searchValue).toEqual(expectedValue2));
  });

  it('should update the selected filter', () => {
    const initialState = {
      selectedFilter: 'All'
    };

    const expectedSelectedFilter = 'Action';

    const action = {
      type: SELECT_TAB,
      payload: 'Action'
    };

    [search(initialState, action)].map(nextState => {
      return expect(nextState.selectedFilter).toEqual(expectedSelectedFilter);
    });
  });
});
