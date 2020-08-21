import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import './SearchIngredient.scss'
import get from "lodash/get";
import { getAllCocktails } from "../../actions/CocktailDataAction";
import {connect} from "react-redux";

const SearchIngredient = (props) => {
    const {
        handleGetAllCocktail,
        allCocktail
    } = props



    useEffect(() => {
        handleGetAllCocktail();
        console.log('qui sono effect',allCocktail)
    }, []);

    console.log('qui sono fuori', allCocktail);
    allCocktail.forEach((index)=>{
        const allDrink = index.data.drinks;
        allDrink.find((indexs) => {
            console.log('che cazzo sono', indexs.strIngredient1)
        })
    })



    const ingredient = {
    }

    return (
        <div className={`main-all main-page`}>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allCocktail: get(state, 'CoctkailData.allData', []),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetAllCocktail: bindActionCreators(getAllCocktails, dispatch),

});


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(SearchIngredient);
