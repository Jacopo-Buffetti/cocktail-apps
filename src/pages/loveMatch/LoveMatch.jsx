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
    const [inputErrordLoveData, setInputErrorLoveData] = useState('');
    const [parseNum, setParsNum] = useState('');

    useEffect(() => {
        setParsNum(parseInt(loveData.percentage))
    }, [loveData]);

    const loveMatchSearch = () =>{
        if(inputFirstLoveData.length > 1 && inputSecondLoveData.length > 1) {
            const love = {
                inputFirstLoveData,
                inputSecondLoveData
            };
            handleGetDataLove(love);
            setInputErrorLoveData('');
        }else{
            setInputErrorLoveData('Please check that both fields are correctly filled in');
        }
    }

    return(
        <div className={`main-love main-page`}>
            <div className={`full-page`}>
                <div className={"back-love"} />
            </div>
            <div className={"container-love-card"}>
                <div className={"card-love"}>
                    <h1>Calculate love percentage</h1>
                    <input type="text" id={'first-name'}  placeholder={"First Name"} onChange={(e) => setFirstInputLoveData(e.target.value)} value={inputFirstLoveData} required/>
                    <input type="text"  placeholder={"Second Name"} onChange={(e) => setInputSecondLoveData(e.target.value)} value={inputSecondLoveData} required/>
                    {inputErrordLoveData.length > 0 && (
                        <h6>
                            {inputErrordLoveData}
                        </h6>
                    )}
                    <button onClick={() => loveMatchSearch()}>CLICCAMI</button>
                    {typeof loveData.result !== "undefined" && (
                        <div>
                            <h3>{loveData.fname} - {loveData.sname}</h3>
                            {parseNum > 50 ?
                                <div className={"container-percentage"}>
                                    <img className={"love-arrow"}
                                         src={require('../../assets/image/love-heart-arrow.png')}/>
                                    <p>{parseNum}%</p>
                                </div> :
                                <div className={"container-percentage"}>
                                    <img className={"love-arrow"}
                                         src={require('../../assets/image/broken-heart.png')}/>
                                    <p>{parseNum}%</p>
                                </div>
                            }
                            <h5>{loveData.result}</h5>
                        </div>
                    )}
                </div>
            </div>
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
