import { handleActions } from 'redux-actions';
import { SET_RANDOM_COCKTAILS, SET_SEARCH_COCKTAILS, SET_LETTER_COCKTAILS } from '../actions/types/CocktailDataType';

export const defaultState = {
    data: [],
    list: [],
    datas: [],
};

export default handleActions(
  {
      [SET_RANDOM_COCKTAILS]: (state, action) => ({
          ...state,
          data: action.payload,
      }),
      [SET_SEARCH_COCKTAILS]: (state, action) => ({
          ...state,
          list: action.payload,
      }),
      [SET_LETTER_COCKTAILS]: (state, action) => ({
          ...state,
          datas: action.payload,
      }),
  },
  defaultState,
);
