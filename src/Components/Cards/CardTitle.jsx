import React from 'react'
import {title} from './card.module.css'

export default function CardTitle({children}) {
    return (
        <h1 className={title}>{children}</h1>
    )
}