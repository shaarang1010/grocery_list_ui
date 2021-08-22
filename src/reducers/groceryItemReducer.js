const initState = {
  groceryList: [],
  groceryItemName: null,
  groceryListDate: null,
  groceryId: null
};

const groceryItemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GROCERY_ITEM':
      let newGroceryList = [...state.groceryList, action.payload.list];
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
        ...state,
        groceryList: action.payload.groceryList,
        groceryListDate: action.payload.groceryListDate,
        groceryId: action.payload.groceryId
      };
    case 'UPDATE_GROCERY_CART_ITEMS':
      let groceryList = [...state.groceryList];
      groceryList[action.payload.itemIndex].completed = !groceryList[action.payload.itemIndex].completed;
      return {
        ...state,
        groceryList
      };

    case 'ADD_GROCERY_ITEM_NAME':
      return {
        ...state,
        groceryItemName: action.payload.name
      };
    default:
      break;
  }
  return state;
};

export default groceryItemReducer;
