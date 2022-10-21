import React from 'react'
import s from './Materials.module.css'
import MaterialsItem from "./MaterialsItem";

function Materials(props) {
    debugger
    let state = props.typesPage

    let updateMaterial = (price, selectedId) => {
        debugger
        props.updateMaterial(price, selectedId);
    }
    return (
        <div className={s.typesLayer}>
            {state.materials.map(el => <MaterialsItem id={el.id} img={el.img} name={el.name}
                                                      price={el.price} materialSum={state.materialSum}
                                                      selectedId={state.selectedMaterialId} updateMaterial={updateMaterial}/>)}
            <div className={s.allSum}><textarea value={state.materialSum}></textarea></div>
        </div>
    )
}

export default Materials