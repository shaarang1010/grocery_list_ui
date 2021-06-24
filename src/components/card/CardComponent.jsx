import React from 'react';

import Card from 'react-bootstrap/Card';

import './CardComponent.css';


const CardComponent = (props) => {
    return(
        <Card bg={props.background} className='card'>
            <Card.Header>
                {props.header}
            </Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    )
}

export default CardComponent;