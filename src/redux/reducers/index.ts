import { combineReducers } from 'redux';
import { tilesReducer } from './tilesReducer';

export const rootReducer = combineReducers({
  tiles: tilesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
