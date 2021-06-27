import React from 'react';
import { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Hoc from '../../../components/hoc/Hoc';

/*class GroceryList extends Component{
    constructor(){
        super();
        this.state={
            id: null
        }
    }

    componentDidMount(){
        let id  = this.props.match.params.id;
        console.log(this.props);
        this.setState({ id })
    }

    render(){
        return(
            <Hoc>
                <p>{this.state.id}</p>
            </Hoc>
        )
    }
}*/

const GroceryList = (props) => {
    let { id } = useParams();
    console.log(id);

    return(
        <Hoc>
            <p>{id}</p>
        </Hoc>
    )
}

export default GroceryList;