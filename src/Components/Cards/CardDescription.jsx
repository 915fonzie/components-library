import React from 'react'
import {description} from './card.module.css'

export default function CardDescription({children}) {
    return (
        <p className={description}>{children}</p>
    )
}