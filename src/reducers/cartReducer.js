const initState = {
  groceryList: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS_TO_CART':
      return {
        ...state,
        groceryList: [...action.payload.result]
      };
    case 'REMOVE_ITEM_FROM_CART':
      let items = state.groceryList.filter((item) => item.item !== action.payload.item);
      return {
        ...state,
        groceryList: items
      };
    default:
      break;
  }
  return state;
};

export default cartReducer;
