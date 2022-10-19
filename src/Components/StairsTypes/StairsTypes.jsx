import React from 'react'
import s from './StairsType.module.css'

function StairsTypes(props) {
debugger
    let state = props.typesPage

    let onTypeChange = (price) => {
        props.updateType(price);
    }
    return (
        <div className={s.typesLayer}>
            {state.stairsTypes.map(el => (
                <div key={el.id} className={s.containerType}>
                    <div>
                        <img src={el.img} onClick={() => onTypeChange(el.price)}/>
                    </div>
                    <div>
                        <p>{el.name}</p>
                    </div>
                    <div>
                        <p>{el.price} Руб.</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StairsTypes