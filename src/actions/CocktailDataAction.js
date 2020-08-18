import { createActions } from 'redux-actions';
import { SET_RANDOM_COCKTAILS, GET_RANDOM_COCKTAILS, SET_SEARCH_COCKTAILS, GET_SEARCH_COCKTAILS, GET_LETTER_COCKTAILS, SET_LETTER_COCKTAILS } from './types/CocktailDataType';

export const {
    setRandomCocktails,
    getRandomCocktails,
    setSearchCocktails,
    getSearchCocktails,
    setLetterCocktails,
    getLetterCocktails,
} = createActions({
    [SET_RANDOM_COCKTAILS]: (payload) => payload,
    [GET_RANDOM_COCKTAILS]: (payload) => payload,
    [SET_SEARCH_COCKTAILS]: (payload) => payload,
    [GET_SEARCH_COCKTAILS]: (payload) => payload,
    [SET_LETTER_COCKTAILS]: (payload) => payload,
    [GET_LETTER_COCKTAILS]: (payload) => payload,
});
