import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <div id="pulse-wrapper">
                <div id="pulse">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Loading