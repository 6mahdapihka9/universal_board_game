/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum TilesActionTypes {
    CREATE_TILE = 'SET_SUCCESS',
}

interface CreateTileAction {
    type: TilesActionTypes.CREATE_TILE;
    payload: { };
}

export type TilesActions =
    | CreateTileAction;
