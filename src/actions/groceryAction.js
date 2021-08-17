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

export const selectGroceryItemAction = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SELECT_GROCERY_ITEM',
      payload: { groceryList: data.items, groceryItemName: data.name, groceryListDate: data.date, groceryId: data.id }
    });
  };
};

export const updateGroceryCartItem = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_GROCERY_CART_ITEMS',
      payload: { itemIndex: data }
    });
  };
};

export const addGroceryCartName = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_GROCERY_ITEM_NAME', payload: { name: data } });
  };
};
