import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import get from "lodash/get";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './DialogLetter.scss'

const DialogLetter = (props) => {
    const {
        clickValues
    } = props;

    console.log('porco dio sono piu furbo io',clickValues)

    return (
        <div>
            PORCACCIO DIO
        </div>
    )
}
DialogLetter.defaultProps ={
    clickValues: {}
};


export default compose(
    withRouter,
)(DialogLetter);
