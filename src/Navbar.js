import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar =()=>{
    
        return(
            <div>
                <nav>
                <ul>
                   
                 <li><Link to ="/home">HOME</Link>&nbsp;&nbsp;&nbsp;
                    <Link to ="/project">PROJECT</Link>&nbsp;&nbsp;&nbsp;
                    <Link to ="/services">SERVICES</Link>&nbsp;&nbsp;&nbsp;
                    <Link to ="/contact">CONTACT</Link>&nbsp;&nbsp;&nbsp;
                    </li>
                </ul>

                </nav>
            </div>

        )
    
}