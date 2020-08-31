import { createActions } from 'redux-actions';
import {SET_DATA_LOVE, GET_DATA_LOVE} from "./types/LoveDataType";

export const {
    setDataLove,
    getDataLove
} = createActions({
    [SET_DATA_LOVE]: (payload) => payload,
    [GET_DATA_LOVE]: (payload) => payload,
});
