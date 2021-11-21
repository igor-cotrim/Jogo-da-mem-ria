import React from 'react';

function CardElement(props) {
    return(
        <div id={props.card.id} className={`card ${props.card.flip?"flip":""}`} onClick={props.handleFlip}>
            <div className="card_front">
                <img className="icon" alt={props.card.icon} src={`assets/${props.card.icon}.png`}></img>
            </div>
            <div className="card_back">
                <h2>{"</>"}</h2>
            </div>
        </div>
    );
}
export default CardElement;