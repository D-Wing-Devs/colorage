import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  shelf: shelfReducer,
  filters: filtersReducer,
  sort: sortReducer
});
