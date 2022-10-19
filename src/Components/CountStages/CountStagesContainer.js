import React from "react";
import {updateCountStagesAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import CountStages from "./CountStages";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateCountStages: (count) => {
            let action = updateCountStagesAC(count);
            dispatch(action);
        }
    }
}

const CountStagesContainer = connect(mapStateToProps, mapDispatchToProps) (CountStages);

export default CountStagesContainer;