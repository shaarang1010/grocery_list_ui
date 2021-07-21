export const addCartItemsAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_ITEMS_TO_CART', payload: { result: data } });
  };
};

export const removeItemsFromCartAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { result: data } });
  };
};
