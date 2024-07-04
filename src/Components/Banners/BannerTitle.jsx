import React from 'react'
import { BannerContext } from './Banner'
import {titleContainer, img, title} from './banner.module.css'

export default function BannerTitle({ children }) {

    const {imgSource} = React.useContext(BannerContext)
    return (
        <div className={titleContainer}>
            <img src={imgSource} className={img}/>
            <h3 className={title}>{children}</h3>
        </div>
    )
}