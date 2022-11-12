import m from "../MaterialView/MaterialView.module.css";
import React from "react";

const MaterialViewItem = (props) => {
    debugger
    return (
        <div key={props.id} >
            <div>
                <img src={props.img} className={m.imageBlock}/>
            </div>
        </div>
    )
}

export default MaterialViewItem