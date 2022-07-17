import { Dispatch } from 'redux';
import { TilesActions, TilesActionTypes } from '../action-types/tilesActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createTile = (tile: {}) => async (dispatch: Dispatch<TilesActions>) => {
  dispatch({
    type: TilesActionTypes.CREATE_TILE,
    payload: tile,
  });
};
