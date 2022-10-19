import React from 'react'
import s from './ImageView.module.css'

const ImageView = (props) => {
    return (
        <div>
        <div className={s.imageBlock}>Image will be here</div>
           {/* <div><textarea value={props.store.allSum}/></div>*/}
        </div>
    )
}

export default ImageView;