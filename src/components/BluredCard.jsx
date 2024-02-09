import React from 'react'

export default function BluredCard({ className, children }) {
    return (
        <div className={`blur-card ${className}`}>
            <div className="blur-background" />
            {children}
        </div>
    )
}
