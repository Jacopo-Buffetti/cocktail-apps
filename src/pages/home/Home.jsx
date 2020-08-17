import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { getSearchCocktails } from '../../actions/CocktailDataAction';
import { getRandomCocktails } from '../../actions/CocktailDataAction';
import Slider from 'infinite-react-carousel';
import Modal from '@material-ui/core/Modal';
import './home.scss';
import DialogRandom from "../../components/DialogRandom/DialogRandom";
import DialogSearch from "../../components/DialogSearch/DialogSearch";

const Home = (props) => {
    const {
        handleGetCocktail,
        randomCoctail,
        handleSearchCocktail,
        searchCoctail,
    } = props;

    const [open, setOpen] = React.useState(false);
    const [openSearch, setOpenSearch] = React.useState(false);
    const [inputData, setInputData] = useState('');

    const saveData = () => {
        const data = {
            inputData,
        };
        console.log(inputData);
        handleSearchCocktail(data);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    useEffect(() => {
        handleGetCocktail();
        handleSearchCocktail();
    }, []);

    console.log('dio bestia',searchCoctail.strAlcoholic)

    return (
        <div className={`main-home main-page`}>
            <Slider className={'slider-home'} dots>
                <div className={'container-one'}>
                </div>
                <div className={'container-two'}>
                </div>
                <div className={'container-three'}>
                </div>
            </Slider>
            <div>
                <h3>The Random Cocktail</h3>
                <div className="card" onClick={handleOpen}>
                    <img src={randomCoctail.strDrinkThumb} alt="Avatar" />
                    <div className="container">
                        <h4><b>{randomCoctail.strDrink}</b></h4>
                        <p>Glass: {randomCoctail.strGlass}</p>
                        <p>Category: {randomCoctail.strAlcoholic}</p>
                    </div>
                </div>
            </div>
            <h3>Search your Cocktail</h3>
            <div className={'section-two'}>
                <div className={"container-form"}>
                    <input type="text"  placeholder={"Search you cocktail"} onChange={(e) => setInputData(e.target.value)} value={inputData}/>
                    <button onClick={() => saveData()}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className={"container-card"}>
                    {
                        typeof searchCoctail.strDrink !== "undefined" ?(
                            <div className="card" onClick={handleOpenSearch}>
                                <img src={searchCoctail.strDrinkThumb} alt="Avatar" />
                                <div className="container">
                                    <h4><b>{searchCoctail.strDrink}</b></h4>
                                    <p>Glass: {searchCoctail.strGlass}</p>
                                    <p>Category: {searchCoctail.strAlcoholic}</p>
                                </div>
                            </div>
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
                <DialogRandom randomCoctail={randomCoctail}></DialogRandom>
            </Modal>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openSearch}
                onClose={handleCloseSearch}
            >
                <DialogSearch randomCoctail={randomCoctail}></DialogSearch>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    randomCoctail: get(state, 'CoctkailData.data', []),
    searchCoctail: get(state, 'CoctkailData.list', []),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetCocktail: bindActionCreators(getRandomCocktails, dispatch),
    handleSearchCocktail: bindActionCreators(getSearchCocktails, dispatch),

});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Home);
