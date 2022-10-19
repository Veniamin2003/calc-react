import React from 'react'
import s from './Materials.module.css'

function Materials(props) {
    debugger
    let state = props.typesPage

    let updateMaterial = (price) => {
        props.updateMaterial(price);
    }
    return (
        <div className={s.typesLayer}>
            {state.materials.map(el => (
                <div key={el.id} className={s.materialsType}>
                    <div>
                        <img src={el.img} onClick={() => updateMaterial(el.price)}/>
                    </div>
                    <div>
                        <p>{el.name}</p>
                    </div>
                    <div>
                        <p>{el.price} Руб.</p>
                    </div>
                </div>
            ))}
            <div className={s.allSum}><textarea value={state.materialSum}></textarea></div>
        </div>
    )
}

export default Materials