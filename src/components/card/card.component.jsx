import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h4>{props.monster.name}</h4>
        <h5>{props.monster.email}</h5>
    </div>
);