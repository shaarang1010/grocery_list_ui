import React from 'react';
import { Component } from 'react';

import Hoc from '../../../components/hoc/Hoc';

class Homepage extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount(){
        // load json file
    }

    render(){
        return(
            <Hoc>
                {/*
                    Render list of grocery items as a card. 
                    Card and items completed and to complete
                    May be organize by date
                    
                */}
            </Hoc>
        )
    }
}


export default Homepage;