import { combineReducers } from 'redux';

import groceryItemReducer from './groceryItemReducer';

const rootReducer = combineReducers({
  groceryItem: groceryItemReducer
});

export default rootReducer;
