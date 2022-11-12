import s from "../../ContainerCSSModule/Container.module.css";
import React from "react";

function StairsTypesItem(props) {
    let isActive
    ( props.id === props.selectedId ? isActive = true : isActive = false )

    const containerTypeClass = isActive ? s.containerTypeActive : s.containerType
    return (
        <div key={props.id} className={containerTypeClass} onClick={() => props.onTypeChange(props.price, props.id)}>
            <div>
                <img src={props.img} />
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default StairsTypesItem