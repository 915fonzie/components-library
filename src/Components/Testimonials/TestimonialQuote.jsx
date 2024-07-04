import React from 'react'
import {quote} from './testimonial.module.css'

export default function TestimonialQuote({ children }) {
    return (
        <p className={quote}>{children}</p>
    )
}