import React from 'react'
import s from './Results.module.css'


function Results(props) {
    debugger
    let state = props.typesPage

    let countAllSum = () => {
        debugger
        props.countAllSum();
    }
    return (
        <div>
            <div><button onClick={countAllSum}>Посчитать</button></div>
            <div><textarea value={state.allSum}></textarea></div>
        </div>
    )
}

export default Results