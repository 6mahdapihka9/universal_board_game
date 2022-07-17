import { tilesStateType } from '../types';
import { TilesActions, TilesActionTypes } from '../action-types/tilesActionTypes';

const initialState: tilesStateType = [];

export const tilesReducer = (
  state = initialState,
  action: TilesActions,
): tilesStateType => {
  switch (action.type) {
    case TilesActionTypes.CREATE_TILE:
      return [...state, action.payload];
    default:
      return [...state];
  }
};
