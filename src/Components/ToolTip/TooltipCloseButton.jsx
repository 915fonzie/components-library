import React from 'react'
import closeIcon from './images/close.svg'
import {closeBtn, closeBtnContainer} from './tooltip.module.css'

export default function TooltipCloseButton({ handleReveal, color }) {

    const containerRef = React.useRef()

    React.useEffect(() => {
        containerRef.current.style.setProperty('--shadow-color', color)
    }, [])
    
    const closeStyles = {
        maskImage: `url("${closeIcon}")`,
        WebMaskImage: `url("${closeIcon}")`,
        backgroundColor: color,
    }

    return (
        <div className={closeBtnContainer} ref={containerRef}>
            <button className={closeBtn} onClick={handleReveal} style={closeStyles}></button>
        </div>
    )
    
}