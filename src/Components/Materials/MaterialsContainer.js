import React from "react";
import {updateMaterialAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import Materials from "./Materials";

let mapStateToProps = (state) => {
    debugger
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMaterial: (price) => {
            debugger
            let action = updateMaterialAC(price);
            dispatch(action);
        }
    }
}

const StairsTypesContainer = connect(mapStateToProps, mapDispatchToProps) (Materials);

export default StairsTypesContainer;