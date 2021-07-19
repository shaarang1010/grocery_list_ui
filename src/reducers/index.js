import { combineReducers } from 'redux';

import groceryItemReducer from './groceryItemReducer';

import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  groceryItem: groceryItemReducer,
  cart: cartReducer
});

export default rootReducer;
