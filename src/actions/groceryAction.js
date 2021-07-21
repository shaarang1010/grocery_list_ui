export const addItemToGroceryAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_GROCERY_ITEM', payload: { groceryItem: data } });
  };
};

export const removeItemFromGroceryAction = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_GROCERY_ITEM' });
  };
};
