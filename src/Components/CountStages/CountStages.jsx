import React from 'react'
import s from './CountStages.module.css'

function CountStages(props) {
    let state = props.typesPage

    let newCountElement = React.createRef();

    let onCountPagesChange = () => {
        let count = newCountElement.current.value;
        props.updateCountStages(count);
    }

    return (
        <div className={s.typesLayer}>
            <textarea onChange={onCountPagesChange}
                      ref={newCountElement}
                      value={state.countStages}/>
        </div>
    )
}

export default CountStages