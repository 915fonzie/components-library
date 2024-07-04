import React from 'react'
import tooltipStyles from './tooltip.module.css'
import TooltipCloseButton from './TooltipCloseButton'
import useEffectOnUpdate from '../../hooks/useEffectOnUpdate'

export default function Tooltip({
    children, title, description, icon, black, white, darkBlue,
    lightBlue, darkPink, lightPink, darkGreen, lightGreen, ...rest }) {
    
    const [reveal, setReveal] = React.useState(false)
    const wrapperRef = React.useRef()

    function openReveal() {
        setReveal(true)
    }
    function closeReveal() {
        setReveal(false)
    }

    const iconColor = (black && '#C7C7C7' || white && "#6B7280" ||
        darkBlue && "#7EA6F2" || lightBlue && "#1C51B9" || darkPink && "#F462E6" ||
        lightPink && "#C7369E" || darkGreen && "#C1FFCF" || lightGreen && "#41A557" || "#C7C7C7")
    
    const titleColor = (black && 'white' || white && "#111827" ||
        darkBlue && "white" || lightBlue && "#1E40AF" || darkPink && "white" ||
        lightPink && "#A9229B" || darkGreen && "white" || lightGreen && "#137A2A" || "white")
    
    const descriptionColor= (black && '#C7C7C7' || white && "#6B7280" ||
        darkBlue && "#E8EDFF" || lightBlue && "#1C51B9" || darkPink && "#FFE9FD" ||
        lightPink && "#C7369E" || darkGreen && "#E3FFE9" || lightGreen && "#3C8C4E" || "#C7C7C7")
    
    const backgroundColor= (black && '#262626' || white && "white" ||
        darkBlue && "#1E40AF" || lightBlue && "#E0E7FF" || darkPink && "#A9229B" ||
        lightPink && "#FFF3FC" || darkGreen && "#47AA5D" || lightGreen && "#E7FFF3" || "#C7C7C7")
    
    const iconStyles = {
        backgroundColor: iconColor,
        mask: `url(${icon})`
    }

    const titleStyles = {
        color: titleColor
    }

    const descriptionStyles = {
        color: descriptionColor
    }

    const toolipStyles = {
        backgroundColor
    }

    useEffectOnUpdate(() => wrapperRef.current.style.setProperty('--border-top-color', backgroundColor), [reveal])

    // in order to add background to psuedo element, I added the color to root and pulled it into the tooltip::before element
    // wrapperRef.current.style.setProperty('--border-top-color', backgroundColor)


    return (
        <div className={tooltipStyles.wrapper} {...rest} ref={wrapperRef}>
            {children(openReveal)}
            {reveal && <div className={tooltipStyles.tooltip} style={toolipStyles}>
                <div className={tooltipStyles.titleContainer}>
                    <div className={tooltipStyles.icon} style={iconStyles}></div>
                    <h4 className={tooltipStyles.title} style={titleStyles}>{title}</h4>
                </div>
                <p className={tooltipStyles.description} style={descriptionStyles}>{description}</p>
                <TooltipCloseButton handleReveal={closeReveal} color={titleColor}/>
            </div>}
        </div>
    )
}