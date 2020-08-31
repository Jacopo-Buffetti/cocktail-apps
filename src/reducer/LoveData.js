import { handleActions } from 'redux-actions';
import {
    SET_DATA_LOVE,
} from "../actions/types/LoveDataType";

export const defaultState = {
    love: []
}

export default handleActions({
    [SET_DATA_LOVE]: (state, action) => ({
        ...state,
        love: action.payload
    })
}, defaultState);
