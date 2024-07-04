import React from "react";
import classnames from 'classnames'
import testimonialStyles from "./testimonial.module.css";
import quotesImg from './images/quote.svg'
import dotPattern from './images/dotPattern.svg'

export default function Testimonial({ children, name, job, position, img, logo, ...rest }) {

    const containerClass = img && testimonialStyles["imgContainer"] || testimonialStyles["noImgContainer"]
    const allClasses = classnames(containerClass)

    return (
        <div className={allClasses} {...rest}>
            {img && <img src={img} className={testimonialStyles.profileImg}/>}
            <div className={testimonialStyles.text}>
            {img && <img src={quotesImg} className={testimonialStyles.quoteImg}/>}
            {!img && logo && <img src={logo} className={testimonialStyles.logo}/>}
                {children}
                <h3 className={testimonialStyles.name}>{name}</h3>
                <h4 className={testimonialStyles.jobInfo}>{`${job}, ${position}`}</h4>
            </div>
            {!img && <img src={dotPattern} className={testimonialStyles.dots}/>}
        </div>
    )
}
