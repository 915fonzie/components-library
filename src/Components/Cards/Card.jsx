import React from 'react'
import defaultIcon from './images/default-icon.svg'
import {card, iconStyle, iconImg} from './card.module.css'

export default function Card({ children, icon, iconColor, ...rest }) {

    const styles = {
        backgroundColor: iconColor ? iconColor : "#3F75FE"
    }
    
    return (
        <div className={card} {...rest}>
            <div className={iconStyle} style={styles}>
                <img src={icon || defaultIcon} className={iconImg}/>
            </div>
            {children}
        </div>
    )
}