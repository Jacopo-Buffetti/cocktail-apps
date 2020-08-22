import axios from 'axios';
import get from 'lodash/get';
import {
    GET_RANDOM_COCKTAILS, SET_RANDOM_COCKTAILS,
    GET_SEARCH_COCKTAILS, SET_SEARCH_COCKTAILS,
    GET_LETTER_COCKTAILS, SET_LETTER_COCKTAILS,
    GET_ALL_COCKTAILS, SET_ALL_COCKTAILS,
    SET_ALL_INGREDIENT, GET_ALL_INGREDIENT
} from '../actions/types/CocktailDataType';

const checkCocktailApp = (store) => (next) => (action) => {
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
            const inputData = get(action, 'payload.inputData', null);
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputData}`)
                .then((response) => {
                    console.log('response 2', response);
                    store.dispatch({ type: SET_SEARCH_COCKTAILS, payload: get(response, 'data.drinks[0]', []) });
                });
            break;
        case GET_LETTER_COCKTAILS:
            next(action);
            console.log("avro sbagliato", action.payload);
            const clickValues = get(action, 'payload.e', null);
            console.log(clickValues)
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${clickValues}`)
                .then((response) => {
                    console.log('response 2', response);
                    store.dispatch({ type: SET_LETTER_COCKTAILS, payload: get(response, 'data.drinks', []) });
                });
            break;
        case GET_ALL_COCKTAILS:
            let one = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
            let two = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b"
            let three = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"
            let four = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d"
            let five = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e"
            let six = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f"
            let seven = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
            let eight = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h"
            let nine = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i"
            let ten = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j"
            let eleven = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k"
            let twelve = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l"
            let thirteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m"
            let fourteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n"
            let fifteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o"
            let sixteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
            let seventeen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q"
            let eighteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r"
            let nineteen = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s"
            let twenty = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t"
            let twentyOne = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u"
            let twentyTwo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v"
            let twentyThree = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w"
            let twentyFour = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x"
            let twentyFive = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y"
            let twentySix = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t"

            const requestOne = axios.get(one);
            const requestTwo = axios.get(two);
            const requestThree = axios.get(three);
            const requestFour = axios.get(four);
            const requestFive = axios.get(five);
            const requestSix = axios.get(six);
            const requestSeven = axios.get(seven);
            const requestEight = axios.get(eight);
            const requestNine = axios.get(nine);
            const requestTen = axios.get(ten);
            const requestEleven = axios.get(eleven);
            const requestTwelve = axios.get(twelve);
            const requestThirteen = axios.get(thirteen);
            const requestFourteen = axios.get(fourteen);
            const requestFiveteen = axios.get(fifteen);
            const requestSixteen = axios.get(sixteen);
            const requestSeventeen = axios.get(seventeen);
            const requestEighteen = axios.get(eighteen);
            const requestNineteen = axios.get(nineteen);
            const requestTwenty = axios.get(twenty);
            const requestTwentyOne = axios.get(twentyOne);
            const requestTwentyTwo = axios.get(twentyTwo);
            const requestTwentyThree = axios.get(twentyThree);
            const requestTwentyFour = axios.get(twentyFour);
            const requestTwentyFive = axios.get(twentyFive);
            const requestTwentySix = axios.get(twentySix);


            axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight, requestNine, requestTen, requestEleven, requestTwelve, requestThirteen, requestFourteen, requestFiveteen, requestSixteen, requestSeventeen, requestEighteen, requestNineteen, requestTwenty, requestTwentyOne, requestTwentyTwo, requestTwentyThree, requestTwentyFour, requestTwentyFive, requestTwentySix]).then(axios.spread((...response) => {
                console.log('cazzo ce',response);
                store.dispatch({ type: SET_ALL_COCKTAILS, payload: response });
                // use/access the results
            })).catch(errors => {
                // react on errors.
            })
            break;
        case GET_ALL_INGREDIENT:
            next(action);
            const clickIngredient = get(action, 'payload.inputData');
            console.log('Dio merdissima', clickIngredient)
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${clickIngredient}`)
                .then((response) => {
                    console.log('response madonna', response);
                    store.dispatch({ type: SET_ALL_INGREDIENT, payload: get(response, 'data.drinks[0]', []) });
                });
            break;
        default:
            next(action);
    }
};

export default checkCocktailApp;
