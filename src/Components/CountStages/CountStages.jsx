import React from 'react'
import s from './CountStages.module.css'

function CountStages(props) {
    let state = props.typesPage

    let newCountElementOne = React.createRef();
    let newCountElementTwo = React.createRef();

    let onWidthPagesChange = () => {
        debugger
        let count = newCountElementOne.current.value;
        props.updateWidthStages(count);
    }

    let onHeightPagesChange = () => {
        debugger
        let count = newCountElementTwo.current.value;
        props.updateHeightStages(count);
    }

    return (
        <div className={s.typesLayer}>
            <div><h2>Выберите размер</h2></div>
            <div>
                <div className={s.blockContainer}>
                    {state.stairsSize.width.map(el => (
                        <div key={el.id}>
                            <div>
                                <img src={el.img}/>
                            </div>
                            <div>
                                <p>{el.name}</p>
                            </div>
                            <div className={s.textareaBlock}>
                                 <textarea onBlur={onWidthPagesChange}
                                           ref={newCountElementOne}
                                           /*value={state.stairsWidth}*//>
                                <p>(см)</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={s.blockContainer}>
                    {state.stairsSize.height.map(el => (
                        <div key={el.id}>
                            <div>
                                <img src={el.img}/>
                            </div>
                            <div>
                                <p>{el.name}</p>
                            </div>
                            <div className={s.textareaBlock}>
                                 <textarea onBlur={onHeightPagesChange}
                                           ref={newCountElementTwo}
                                           /*value={state.stairsHeight}*//>
                                <p>(см)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CountStages