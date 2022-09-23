import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = function (props) {

    const handleClick = () => {
        console.log(props);
        if(!props.disabled){
            props.handleClick(props.card)
        }
    }

    return (
        <div className="card">
            <div className={props.flipped ? "flipped" : ""}>
                <img className="front" src={props.card.src} alt="front card" />
                <img className="back" src="/img/cover.png" alt="back card" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Card;