const initState = {
  cart: []
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload.result]
      };
    case 'REMOVE_ITEMS_FROM_CART':
      let items = state.cart.filter((item) => item.item !== action.payload.item);
      return {
        ...state,
        cart: items
      };
    default:
      return;
  }
};

export default cartReducer;
