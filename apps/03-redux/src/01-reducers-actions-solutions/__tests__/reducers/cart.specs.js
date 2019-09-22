import {
  initialState,
  cart,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART
} from '../../reducers/cartReducer.js';

describe('Cart Reducer', () => {
  it('should be a function', () => {
    expect(typeof cart).toEqual('function');
  });

  it('should return its initial state', () => {
    expect(cart(undefined, {type: 'testing'})).toEqual(initialState);
  });

  it('should be able to add an item', () => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const expected = [action.payload];

    [cart(undefined, action)].map(nextState => {
      expect(nextState.products).toEqual(expected);
    });
  });

  it('should not add the same item multiple times', () => {
    const action = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const expected = [action.payload];

    [cart(undefined, action)]
      .map(nextState => cart(nextState, action))
      .map(nextState => expect(nextState.products).toEqual(expected));
  });

  it('should be able to remove an item', () => {
    const action = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 9382
    };

    const state = {
      products: [9382]
    };

    [cart(state, action)].map(nextState => {
      expect(nextState.products).toEqual([]);
    });
  });

  it('should count the number of items', () => {
    const actionADD = {
      type: ADD_ITEM_TO_CART,
      payload: 9382
    };

    const actionADD2 = {
      type: ADD_ITEM_TO_CART,
      payload: 4343
    };

    const actionREMOVE = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 4343
    };

    const actionREMOVE2 = {
      type: REMOVE_ITEM_FROM_CART,
      payload: 9382
    };

    [cart(undefined, actionADD)]
      .map(nextState => {
        expect(nextState.count).toEqual(1);
        return cart(nextState, actionADD2);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(2);
        return cart(nextState, actionADD2);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(2);
        return cart(nextState, actionREMOVE);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(1);
        return cart(nextState, actionREMOVE2);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(0);
        return cart(nextState, actionREMOVE2);
      })
      .map(nextState => {
        expect(nextState.count).toEqual(0);
      });
  });

  it('should be able to toggle the open property of the cart', () => {
    const action = {
      type: TOGGLE_CART
    };

    [cart(undefined, action)]
      .map(nextState => {
        expect(nextState.isOpen).toEqual(true);
        return cart(nextState, action);
      })
      .map(nextState => expect(nextState.isOpen).toEqual(false));
  });
});
