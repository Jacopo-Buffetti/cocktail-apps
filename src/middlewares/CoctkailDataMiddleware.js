import axios from 'axios';
import get from 'lodash/get';
import { GET_RANDOM_COCKTAILS, SET_RANDOM_COCKTAILS, GET_SEARCH_COCKTAILS, SET_SEARCH_COCKTAILS } from '../actions/types/CocktailDataType';

const checkCocktailApp = (store) => (next) => (action) => {
    console.log('action type', action.type);
    console.log('next',next);
    console.log('action',action);
    console.log('store', store);
    switch (action.type) {
        case GET_RANDOM_COCKTAILS:
            next(action);
            console.log(action.payload);
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                .then((response) => {
                    console.log(response);
                    store.dispatch({ type: SET_RANDOM_COCKTAILS, payload: get(response, 'data.drinks[0]', []) });
                });
            break;
        case GET_SEARCH_COCKTAILS:
            next(action);
            console.log("avro sbagliato", action.payload);
            const inputData = get(action, 'payload.inputData', null);
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputData}`)
                .then((response) => {
                    console.log('response 2', response);
                    store.dispatch({ type: SET_SEARCH_COCKTAILS, payload: get(response, 'data.drinks[0]', []) });
                });
            break;
        default:
            next(action);
    }
};

export default checkCocktailApp;
