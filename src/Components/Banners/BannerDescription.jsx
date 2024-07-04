import React from 'react'
import {description} from './banner.module.css'

export default function BannerDescription({ children }) {
    return <p className={description}>{children}</p>
}