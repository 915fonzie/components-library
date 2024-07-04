import React from 'react'
import classnames from 'classnames'
import badgeStyles from './badge.module.css'

export default function Badge({ children, className, color, square, pill, ...rest }) {


    const colorClass = color && badgeStyles[color] || badgeStyles.gray
    const shapeClass = pill && badgeStyles.pill || badgeStyles.square
    const allClasses = classnames(badgeStyles.badge, colorClass, shapeClass, className)


    return (
        <span className={allClasses} {...rest}>
            {children}
        </span>
    )
}