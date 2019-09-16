import React from 'react'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './Home';
import Project from './Project';
import Services from './Services';
import Contact from './Contact';


export const Content = () => {
    return(
        <div>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/project" component={Project}></Route>
                <Route path="/services" component={Services}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        </div>
    )
}
