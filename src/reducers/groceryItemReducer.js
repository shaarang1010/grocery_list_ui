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
    case 'UPDATE_GROCERY_CART_ITEMS':
      let item = state.groceryList[action.payload.itemIndex];
      item = { ...item, completed: !item.completed };
      return {
        ...state,
        groceryList: [...state.groceryList].splice(action.payload.itemIndex, 1, item)
      };
    default:
      break;
  }
  return state;
};

export default groceryItemReducer;
