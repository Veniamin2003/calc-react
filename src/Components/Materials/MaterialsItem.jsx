import React from "react";
import s from "./Materials.module.css";

function MaterialsItem(props) {
    debugger
    if (props.id === props.selectedId)
    {
        return (
            <div key={props.id} className={s.materialsTypeActive}>
                <div>
                    <img src={props.img} onClick={() => props.updateMaterial(props.price, props.id)}/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p>{props.price} Руб.</p>
                </div>


            </div>)
    }
    else {
        return (
            <div key={props.id} className={s.materialsType}>
                <div>
                    <img src={props.img} onClick={() => props.updateMaterial(props.price, props.id)}/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p>{props.price} Руб.</p>
                </div>
            </div>)
    }
}

export default MaterialsItem