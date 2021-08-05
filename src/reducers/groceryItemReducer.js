const initState = {
  groceryList: [],
  groceryItemName: null,
  groceryListDate: null,
  groceryId: null
};

const groceryItemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GROCERY_ITEM':
      let newGroceryList = [...state.groceryList, action.payload.groceryItem];
      return {
        ...state,
        groceryList: newGroceryList
      };
    case 'REMOVE_GROCERY_ITEM':
      let items = state.groceryList.filter((item) => item.item !== action.payload.item);
      return {
        ...state,
        groceryList: items
      };
    case 'SELECT_GROCERY_ITEM':
      return {
        groceryList: action.payload.groceryList,
        groceryItemName: action.payload.groceryItem,
        groceryListDate: action.payload.groceryListDate,
        groceryId: action.payload.groceryId
      };
    default:
      break;
  }
  return state;
};

export default groceryItemReducer;
