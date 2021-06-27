import React from 'react';

import { ListGroup } from 'react-bootstrap';

const ListComponent = (props) =>{
    return(
        <ListGroup variant={props.variant}>
    { props.items.map((item, index)=> {
        return(
            <ListGroup.Item key={index}>
                {item.item}
            </ListGroup.Item>
        )
        
    })}
    </ListGroup>
    )   
}

export default ListComponent;