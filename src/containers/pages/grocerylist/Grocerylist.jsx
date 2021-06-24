import React from 'react';
import { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import Hoc from '../../../components/hoc/Hoc';

class GroceryList extends Component{
    constructor(){
        super();
        this.state={}
    }

    async componentDidMount(){

    }

    render(){
        return(
            <Hoc>
                {/** Show the individual list */}
            </Hoc>
        )
    }
}

export default GroceryList;