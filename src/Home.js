import React from 'react'
import {Route} from 'react-router-dom'
import {App} from './App'

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <p>You chose &nbsp;
                    <button>HOME</button>
                </p>
            </div>
        );
    }
}