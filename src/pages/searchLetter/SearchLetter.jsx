import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './SearchLetter.scss'

const SearchLetter = () => {
    return (
        <div className={"footer"}>
            PORCO DIO
        </div>
    )
}
export default compose(
    withRouter
)(SearchLetter);
