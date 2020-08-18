import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import './SearchLetter.scss'
import get from "lodash/get";
import { getLetterCocktails } from "../../actions/CocktailDataAction";
import {connect} from "react-redux";

const SearchLetter = (props) => {
    const {
        handleGetLetterCocktail,
        letterCocktail
    } = props

    const [clickValues, setClickValues] = useState('');

    const clickValue = (e) =>{
        const data = {
            e,
        };
        handleGetLetterCocktail(data);
        setClickValues(e);
    }

    console.log('mannaggia dio porco',letterCocktail);

    useEffect(() => {
        handleGetLetterCocktail();
    }, []);

    return (
        <div className={`main-letter main-page`}>
            <div className={`full-page`}>
                <img src={require('../../assets/image/letters-search.png')} />
            </div>
            <div className={`search-letter-container`}>
                <div className={'sidebar'}>
                    <h3>Browse Drinks</h3>
                    <ul className={"search-letter"}>
                        <li><a onClick={(e) => clickValue("A")}>A</a></li>
                        <li><a onClick={(e) => clickValue("B")}>B</a></li>
                        <li><a onClick={(e) => clickValue("C")}>C</a></li>
                        <li><a onClick={(e) => clickValue("D")}>D</a></li>
                        <li><a onClick={(e) => clickValue("E")}>E</a></li>
                        <li><a onClick={(e) => clickValue("F")}>F</a></li>
                        <li><a onClick={(e) => clickValue("G")}>G</a></li>
                        <li><a onClick={(e) => clickValue("H")}>H</a></li>
                        <li><a onClick={(e) => clickValue("I")}>I</a></li>
                        <li><a onClick={(e) => clickValue("J")}>J</a></li>
                        <li><a onClick={(e) => clickValue("K")}>K</a></li>
                        <li><a onClick={(e) => clickValue("L")}>L</a></li>
                        <li><a onClick={(e) => clickValue("M")}>M</a></li>
                        <li><a onClick={(e) => clickValue("N")}>N</a></li>
                        <li><a onClick={(e) => clickValue("O")}>O</a></li>
                        <li><a onClick={(e) => clickValue("P")}>P</a></li>
                        <li><a onClick={(e) => clickValue("Q")}>Q</a></li>
                        <li><a onClick={(e) => clickValue("R")}>R</a></li>
                        <li><a onClick={(e) => clickValue("S")}>S</a></li>
                        <li><a onClick={(e) => clickValue("T")}>T</a></li>
                        <li><a onClick={(e) => clickValue("U")}>U</a></li>
                        <li><a onClick={(e) => clickValue("V")}>V</a></li>
                        <li><a onClick={(e) => clickValue("W")}>W</a></li>
                        <li><a onClick={(e) => clickValue("X")}>X</a></li>
                        <li><a onClick={(e) => clickValue("Y")}>Y</a></li>
                        <li><a onClick={(e) => clickValue("Z")}>Z</a></li>
                    </ul>
                </div>
                <div className={`gallery-letter-flex`}>
                    {
                        (letterCocktail) ?(
                            letterCocktail.map((item, i) => (
                                <div className="card" key={i.toString()}>
                                    <img src={item.strDrinkThumb} alt="Avatar" />
                                    <div>
                                        <h4><b>{item.strDrink}</b></h4>
                                        <p>Glass: {item.strGlass}</p>
                                        <p>Category: {item.strAlcoholic}</p>
                                    </div>

                                </div>
                            ))
                        ):(
                            <div></div>
                        )
                    }
                </div>
                <div className={`container-card-search-letter`}>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    letterCocktail: get(state, 'CoctkailData.datas', []),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetLetterCocktail: bindActionCreators(getLetterCocktails, dispatch),

});


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(SearchLetter);
