import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import './SearchIngredient.scss'
import get from "lodash/get";
import { getAllCocktails } from "../../actions/CocktailDataAction";
import { getAllIngredient } from "../../actions/CocktailDataAction";
import {connect} from "react-redux";
//TABS
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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



const SearchIngredient = (props) => {
    const {
        handleGetAllCocktail,
        handleGetAllingredient,
        allCocktail,
        allIngredient
    } = props
    const [allIngredients, setAllIngredients] = useState([]);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [aIngredient, setAIngredients] = useState([]);
    const [bIngredient, setBIngredients] = useState([]);
    const [cIngredient, setCIngredients] = useState([]);
    const [dIngredient, setDIngredients] = useState([]);
    const [eIngredient, setEIngredients] = useState([]);
    const [fIngredient, setFIngredients] = useState([]);
    const [gIngredient, setGIngredients] = useState([]);
    const [hIngredient, setHIngredients] = useState([]);
    const [iIngredient, setIIngredients] = useState([]);
    const [jIngredient, setJIngredients] = useState([]);
    const [kIngredient, setKIngredients] = useState([]);
    const [lIngredient, setLIngredients] = useState([]);
    const [mIngredient, setMIngredients] = useState([]);
    const [nIngredient, setNIngredients] = useState([]);
    const [oIngredient, setOIngredients] = useState([]);
    const [pIngredient, setPIngredients] = useState([]);
    const [qIngredient, setQIngredients] = useState([]);
    const [rIngredient, setRIngredients] = useState([]);
    const [sIngredient, setSIngredients] = useState([]);
    const [tIngredient, setTIngredients] = useState([]);
    const [uIngredient, setUIngredients] = useState([]);
    const [vIngredient, setVIngredients] = useState([]);
    const [wIngredient, setWIngredients] = useState([]);
    const [xIngredient, setXIngredients] = useState([]);
    const [yIngredient, setYIngredients] = useState([]);
    const [zIngredient, setZIngredients] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        handleGetAllCocktail();
        handleGetAllingredient();
    }, []);

    useEffect(() => {
        let allDrink = [];
        let allIngredient = [];
        let allIngredientDrink = [];
        const aIngredient = [];
        const bIngredient = []
        const cIngredient= [];
        const dIngredient = [];
        const eIngredient = [];
        const fIngredient = [];
        const gIngredient = [];
        const hIngredient = [];
        const iIngredient = [];
        const jIngredient = [];
        const kIngredient = [];
        const lIngredient = [];
        const mIngredient = [];
        const nIngredient = [];
        const oIngredient = [];
        const pIngredient = [];
        const qIngredient = [];
        const rIngredient = [];
        const sIngredient = [];
        const tIngredient = [];
        const uIngredient = [];
        const vIngredient = [];
        const wIngredient = [];
        const xIngredient = [];
        const yIngredient = [];
        const zIngredient = [];
        allCocktail.forEach((index) => {
            if (index.data.drinks !== null) {
                allDrink = index.data.drinks;
            }
            allDrink.forEach((ingr) => {
                allIngredient.push(ingr.strIngredient1, ingr.strIngredient2, ingr.strIngredient3, ingr.strIngredient4, ingr.strIngredient5, ingr.strIngredient6, ingr.strIngredient7, ingr.strIngredient8, ingr.strIngredient9, ingr.strIngredient10, ingr.strIngredient11, ingr.strIngredient12, ingr.strIngredient13, ingr.strIngredient14, ingr.strIngredient15);
            })
        })
        allIngredient.map((item) => {
            if (item !== null && item !== '') {
                allIngredientDrink.push(item.toLowerCase())
            }
        })
        const uniqueArray = [...new Set(allIngredientDrink.sort())];
        uniqueArray.forEach((indexArray) => {
            switch (indexArray.charAt(0)){
                case "a":
                    aIngredient.push(indexArray);
                    break;
                case "b":
                    bIngredient.push(indexArray);
                    break;
                case "c":
                    cIngredient.push(indexArray);
                    break;
                case "d":
                    dIngredient.push(indexArray);
                    break;
                case "e":
                    eIngredient.push(indexArray);
                    break;
                case "f":
                    fIngredient.push(indexArray);
                    break;
                case "g":
                    gIngredient.push(indexArray);
                    break;
                case "h":
                    hIngredient.push(indexArray);
                    break;
                case "i":
                    iIngredient.push(indexArray);
                    break;
                case "j":
                    jIngredient.push(indexArray);
                    break;
                case "k":
                    kIngredient.push(indexArray);
                    break;
                case "l":
                    lIngredient.push(indexArray);
                    break;
                case "m":
                    mIngredient.push(indexArray);
                    break;
                case "n":
                    nIngredient.push(indexArray);
                    break;
                case "o":
                    oIngredient.push(indexArray);
                    break;
                case "p":
                    pIngredient.push(indexArray);
                    break;
                case "q":
                    qIngredient.push(indexArray);
                    break;
                case "r":
                    rIngredient.push(indexArray);
                    break;
                case "s":
                    sIngredient.push(indexArray);
                    break;
                case "t":
                    tIngredient.push(indexArray);
                    break;
                case "u":
                    uIngredient.push(indexArray);
                    break;
                case "v":
                    vIngredient.push(indexArray);
                    break;
                case "w":
                    wIngredient.push(indexArray);
                    break;
                case "x":
                    xIngredient.push(indexArray);
                    break;
                case "y":
                    yIngredient.push(indexArray);
                    break;
                case "z":
                    zIngredient.push(indexArray);
                    break

            }
        })
        setAIngredients(aIngredient);
        setBIngredients(bIngredient);
        setCIngredients(cIngredient);
        setDIngredients(dIngredient);
        setEIngredients(eIngredient);
        setFIngredients(fIngredient);
        setGIngredients(gIngredient);
        setHIngredients(hIngredient);
        setIIngredients(iIngredient);
        setJIngredients(jIngredient);
        setKIngredients(kIngredient);
        setLIngredients(lIngredient);
        setMIngredients(mIngredient);
        setNIngredients(nIngredient);
        setOIngredients(oIngredient);
        setPIngredients(pIngredient);
        setQIngredients(qIngredient);
        setRIngredients(rIngredient);
        setSIngredients(sIngredient);
        setTIngredients(tIngredient);
        setUIngredients(uIngredient);
        setVIngredients(vIngredient);
        setWIngredients(wIngredient);
        setXIngredients(xIngredient);
        setYIngredients(yIngredient);
        setZIngredients(zIngredient);
    }, [allCocktail, handleGetAllingredient]);

    const clickIngredient = (e) =>{
        const data = {
            e,
        };
        handleGetAllingredient(e);
    console.log('porca madonnaccissima', data);
    }


    return (
        <div className={`main-all main-page`}>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example">

                        <Tab label="A" {...a11yProps(0)} />
                        <Tab label="B" {...a11yProps(1)} />
                        <Tab label="C" {...a11yProps(2)} />
                        <Tab label="D" {...a11yProps(3)} />
                        <Tab label="E" {...a11yProps(4)} />
                        <Tab label="F" {...a11yProps(5)} />
                        <Tab label="G" {...a11yProps(6)} />
                        <Tab label="H" {...a11yProps(7)} />
                        <Tab label="I" {...a11yProps(8)} />
                        <Tab label="J" {...a11yProps(9)} />
                        <Tab label="K" {...a11yProps(10)} />
                        <Tab label="L" {...a11yProps(11)} />
                        <Tab label="M" {...a11yProps(12)} />
                        <Tab label="N" {...a11yProps(13)} />
                        <Tab label="O" {...a11yProps(14)} />
                        <Tab label="P" {...a11yProps(15)} />
                        <Tab label="Q" {...a11yProps(16)} />
                        <Tab label="R" {...a11yProps(17)} />
                        <Tab label="S" {...a11yProps(18)} />
                        <Tab label="T" {...a11yProps(19)} />
                        <Tab label="U" {...a11yProps(20)} />
                        <Tab label="V" {...a11yProps(21)} />
                        <Tab label="W" {...a11yProps(22)} />
                        <Tab label="X" {...a11yProps(23)} />
                        <Tab label="Y" {...a11yProps(24)} />
                        <Tab label="Z" {...a11yProps(25)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <ul className={'list-ingredients'}>
                        {
                            aIngredient.map((item, i) => (
                                <li key={i.toString()} onClick={(e) => clickIngredient(item)}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul className={'list-ingredients'}>
                        {
                            bIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul className={'list-ingredients'}>
                        {
                            cIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ul className={'list-ingredients'}>
                        
                        {
                            dIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ul className={'list-ingredients'}>
                        
                        {
                            eIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ul className={'list-ingredients'}>
                        {
                            fIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <ul className={'list-ingredients'}>
                        {
                            gIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <ul className={'list-ingredients'}>
                        {
                            hIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <ul className={'list-ingredients'}>
                        {
                            iIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <ul className={'list-ingredients'}>
                        {
                            jIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={10}>
                    <ul className={'list-ingredients'}>
                        {
                            kIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={11}>
                    <ul className={'list-ingredients'}>
                        {
                            lIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={12}>
                    <ul className={'list-ingredients'}>
                        {
                            mIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={13}>
                    <ul className={'list-ingredients'}>
                        {
                            nIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={14}>
                    <ul className={'list-ingredients'}>
                        {
                            oIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={15}>
                    <ul className={'list-ingredients'}>
                        {
                            pIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={16}>
                    <ul className={'list-ingredients'}>
                        {
                            qIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={17}>
                    <ul className={'list-ingredients'}>
                        {
                            rIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={18}>
                    <ul className={'list-ingredients'}>
                        {
                            sIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={19}>
                    <ul className={'list-ingredients'}>
                        {
                            tIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={20}>
                    <ul className={'list-ingredients'}>
                        {
                            uIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={21}>
                    <ul className={'list-ingredients'}>
                        {
                            vIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={22}>
                    <ul className={'list-ingredients'}>
                        {
                            wIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={23}>
                    <ul className={'list-ingredients'}>
                        {
                            xIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={24}>
                    <ul className={'list-ingredients'}>
                        {
                            yIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={25}>
                    <ul className={'list-ingredients'}>
                        {
                            zIngredient.map((item, i) => (
                                <li key={i.toString()}>{item}</li>
                            ))
                        }
                    </ul>
                </TabPanel>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allCocktail: get(state, 'CoctkailData.allData', []),
    allIngredient: get(state, 'CoctkailData.allIngredient', [])
});

const mapDispatchToProps = (dispatch) => ({
    handleGetAllingredient: bindActionCreators(getAllIngredient, dispatch),
    handleGetAllCocktail: bindActionCreators(getAllCocktails, dispatch),

});


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(SearchIngredient);
