import React from 'react'
import classnames from 'classnames'
import successImg from './images/success.svg'
import warningImg from './images/warning.svg'
import errorImg from './images/error.svg'
import neutralImg from './images/neutral.svg'
import bannerStyles from './banner.module.css'

const BannerContext = React.createContext()

export default function Banner({ children, status, className, ...rest }) {
    
    const statusClass = status && bannerStyles[status] || bannerStyles.neutral
    const allClasses = classnames(bannerStyles.banner, statusClass, className)

    let imgSource
    switch (status) {
        case "success":
            imgSource = successImg
            break
        case "warning":
            imgSource = warningImg
            break
        case "error":
            imgSource = errorImg
            break
        default:
            imgSource = neutralImg
    }

    return (
        <BannerContext.Provider value={{imgSource}}>
            <div className={allClasses} {...rest}>{children}</div>
        </BannerContext.Provider>
    )
}

export { BannerContext }