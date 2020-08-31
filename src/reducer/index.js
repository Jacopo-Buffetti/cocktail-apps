import { combineReducers } from 'redux';
import CoctkailData from './CoctkailData';
import LoveData from "./LoveData";

export const RoutReducer = combineReducers({
    CoctkailData,
    LoveData
});

export default RoutReducer;
