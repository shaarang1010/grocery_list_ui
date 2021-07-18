const initState = {
  groceryList: [],
  groceryItemName: null,
  groceryListDate: null
};

const groceryItemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GROCERY_ITEM':
      let newGroceryList = [...state.groceryList, action.payload.groceryItem];
      return {
        ...state,
        groceryList: newGroceryList
      };
    default:
      break;
  }
  return state;
};

export default groceryItemReducer;
