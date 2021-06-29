import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import GroceryList from '../containers/pages/grocerylist/Grocerylist';

import Homepage from '../containers/pages/homepage/Homepage';

const Routes = props => {
    return(
        <Switch>
            <Route exact path="/" render={(props)=> <Homepage {...props}/>} />
            <Route path="/list/:id" render={(props) => <GroceryList {...props}/>}/>
        </Switch>
    )
}

export default Routes;
