import React from "react";
import s from './../../../ContainerCSSModule/Container.module.css'

function AnderStageItem(props) {
    let isActive
    ( props.id === props.selectedId ? isActive = true : isActive = false )

    const containerTypeClass = isActive ? s.containerTypeActive : s.containerType

    return (
        <div key={props.id} className={containerTypeClass} onClick={() => props.updateAnderStage(props.price, props.id)}>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default AnderStageItem