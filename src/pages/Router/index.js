import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from '../Home';
import Contact from '../Contact';


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path='/contato'>
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default Routers;