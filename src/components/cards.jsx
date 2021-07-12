import React from 'react'
import "../style.css"

export default function Cards({title, text}) {
    return (
        <div className="container">
            <h1>
                {title}
            </h1>
            <hr />
            <div className="textLines">
                            {text}
            </div>
        </div>
    )
}
