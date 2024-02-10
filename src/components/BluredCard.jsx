import React from 'react'

export default function BluredCard({ className, children, onClick }) {
    return (
        <div className={`blur-card ${className}`} onClick={onClick}>
            <div className="blur-background" />
            {children}
        </div>
    )
}
