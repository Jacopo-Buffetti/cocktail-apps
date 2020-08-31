import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import get from "lodash/get";
import {getDataLove} from "../../actions/LoveDataAction";
import './LoveMatch.scss';
import {connect} from "react-redux";


const LoveMatch = (props) => {

    const {
        loveData,
        handleGetDataLove
    } = props;

    const [inputFirstLoveData, setFirstInputLoveData] = useState('');
    const [inputSecondLoveData, setInputSecondLoveData] = useState('');

    const loveMatchSearch = () =>{
        const love = {
            inputFirstLoveData,
            inputSecondLoveData
        };
        handleGetDataLove(love);
    }

    return(
        <div className={`main-love main-page`}>
            <input type="text"  placeholder={"First Name"} onChange={(e) => setFirstInputLoveData(e.target.value)} value={inputFirstLoveData}/>

            <input type="text"  placeholder={"Second Name"} onChange={(e) => setInputSecondLoveData(e.target.value)} value={inputSecondLoveData} />

            <button onClick={() => loveMatchSearch()}>CLICCAMI</button>
        </div>
    )

}

const mapStateToProps = (state) => ({
    loveData: get(state, 'LoveData.love', []),
});

const mapDispatchToProps = (dispatch) => ({
    handleGetDataLove: bindActionCreators(getDataLove, dispatch),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(LoveMatch);
