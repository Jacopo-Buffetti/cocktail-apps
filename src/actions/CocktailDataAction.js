import { createActions } from 'redux-actions';
import { SET_RANDOM_COCKTAILS, GET_RANDOM_COCKTAILS, SET_SEARCH_COCKTAILS, GET_SEARCH_COCKTAILS } from './types/CocktailDataType';

export const {
    setRandomCocktails,
    getRandomCocktails,
    setSearchCocktails,
    getSearchCocktails,
} = createActions({
    [SET_RANDOM_COCKTAILS]: (payload) => payload,
    [GET_RANDOM_COCKTAILS]: (payload) => payload,
    [SET_SEARCH_COCKTAILS]: (payload) => payload,
    [GET_SEARCH_COCKTAILS]: (payload) => payload,
});
