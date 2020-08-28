import { handleActions } from 'redux-actions';
import {
    SET_RANDOM_COCKTAILS,
    SET_SEARCH_COCKTAILS,
    SET_LETTER_COCKTAILS,
    SET_ALL_COCKTAILS,
    SET_ALL_INGREDIENT,
    SET_MODAL_INGREDIENT,
} from '../actions/types/CocktailDataType';

export const defaultState = {
    data: [],
    list: [],
    datas: [],
    allData: [],
    allIngredient: [],
    modalIngredient: []
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
      [SET_ALL_COCKTAILS]: (state, action) => ({
          ...state,
          allData: action.payload,
      }),
      [SET_ALL_INGREDIENT]: (state, action) => ({
          ...state,
          allIngredient: action.payload,
      }),
      [SET_MODAL_INGREDIENT]: (state, action) => ({
          ...state,
          modalIngredient: action.payload,
      }),
  },
  defaultState,
);
