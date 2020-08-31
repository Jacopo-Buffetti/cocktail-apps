import axios from 'axios';
import get from 'lodash/get';
import {GET_DATA_LOVE, SET_DATA_LOVE} from "../actions/types/LoveDataType";

const checkLoveApp = (store) => (next) => (action) => {
    console.log('qui entro sicuro ACTION', action);
    switch (action.type) {
        case GET_DATA_LOVE:
            next(action);
            const firstName = get(action, 'payload', '');
            const secondName = get(action, 'payload', '');
            axios.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
                headers: {
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                    "x-rapidapi-key": "c4e5f84048mshb0fedb29433f35fp19efb2jsn99677d191476"
                }
            })
                .then((response) => {
                    store.dispatch({ type: SET_DATA_LOVE, payload: get(response, 'data', []) });
                });
            break;
        default:
            next(action);
    }
}

export default checkLoveApp;
