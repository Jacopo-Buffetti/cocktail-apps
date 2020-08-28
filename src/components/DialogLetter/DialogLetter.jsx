import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import './DialogLetter.scss'

const DialogLetter = (props) => {
    const {
        clickValues
    } = props;

    const [modalStyle] = React.useState(getModalStyle);
    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            width: 450,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const [ingredient, setIngredient] = useState([]);
    const [measure, setMeasure] = useState([]);

    useEffect(() => {
        const ingredients = [];
        const measures = []
        for (let i= 1; i < 16; ++i){
            if(eval('clickValues.strIngredient' + i) !== null){
                ingredients.push(eval('clickValues.strIngredient' + i));
                measures.push(eval('clickValues.strMeasure' + i));
            }
            setIngredient(ingredients);
            setMeasure(measures);
        }
    }, []);

    const classes = useStyles();

    function getModalStyle() {
        return {
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
        };
    }
    return (
        <div className={"dialog-letter"}>
            <div style={modalStyle} className={`${classes.paper} container-dialog-letter`}>
                <h2>{clickValues.strDrink}</h2>
                <div className={'container-modal-ingredient'}>
                    <ul className={'list-ingredient'}>
                        <li><h4>Ingredients</h4></li>
                        {
                            ingredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                    <ul className={'list-measure'}>
                        <li><h4>Measure</h4></li>
                        {
                            measure.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <h4>Recipe</h4>
                <p>{clickValues.strInstructions}</p>
            </div>
        </div>
    )
}
DialogLetter.defaultProps ={
    clickValues: {}
};


export default compose(
    withRouter,
)(DialogLetter);
