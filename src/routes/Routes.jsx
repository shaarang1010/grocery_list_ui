import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import GroceryList from '../containers/pages/grocerylist/Grocerylist';

import Homepage from '../containers/pages/homepage/Homepage';


const Routes = props => {
    let match = useRouteMatch();
    return(
        <Switch>
            <Route exact path="/" render={(props)=> <Homepage {...props}/>} />
            <Route path={`${match}/list/:id`} children={<GroceryList/>}/>
        </Switch>
    )
}

export default Routes;
