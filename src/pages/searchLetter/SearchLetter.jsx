import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import './SearchLetter.scss'
import get from "lodash/get";
import { getLetterCocktails } from "../../actions/CocktailDataAction";
import {connect} from "react-redux";
import Modal from '@material-ui/core/Modal';
import DialogLetter from "../../components/DialogLetter/DialogLetter";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const SearchLetter = (props) => {
    const {
        handleGetLetterCocktail,
        letterCocktail
    } = props

    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const [clickValues, setClickValues] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [linkActive, setLinkActive] = React.useState(false);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = (e) => {
        setOpen(true);
        setClickValues(e);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickValue = (e) =>{
        const data = {
            e,
        };
        handleGetLetterCocktail(data);
    }

    useEffect(() => {
        handleGetLetterCocktail();
    }, []);

    return (
        <div className={`main-letter main-page`}>
            <div className={`full-page`}>
                <div className={"back-letter"}></div>
            </div>
            <h1 className={"title-pages"}>Search your coctkail by Letter</h1>
            <div className={`classes.root full-width-mobile`}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example">
                        {
                            alphabetArray.map((key, i) => (
                                <Tab key={i.toString()} label={key} {...a11yProps(i)} onClick={(e) => clickValue(key)} />
                            ))
                        }
                    </Tabs>
                </AppBar>
                <div className={`gallery-letter-flex`}>
                {
                    (letterCocktail) ?(
                        letterCocktail.map((item, i) => {
                            return <div className="card" key={i.toString()} onClick={(e) => handleOpen(item)}>
                                <img src={item.strDrinkThumb} alt="Avatar"/>
                                <div>
                                    <h4><b>{item.strDrink}</b></h4>
                                    <p>Glass: {item.strGlass}</p>
                                    <p>Category: {item.strAlcoholic}</p>
                                </div>

                            </div>
                        })
                    ):(
                        <div></div>
                    )
                }
                </div>
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <DialogLetter clickValues={clickValues}></DialogLetter>
            </Modal>
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
