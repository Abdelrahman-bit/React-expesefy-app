import React from 'react';
import { useParams } from 'react-router';
import {Link, useNavigate, BrowserRouter, Route, Routes} from 'react-router-dom'

const Help = ()=> {
    const navigate = useNavigate();
    const props = useParams();
    return (
        <div>
            <h1>Help page {props.id} </h1>
            <button onClick={()=> navigate('/') }> submit me </button>
            <Options />
        </div>
    )
}

const Options = () => {
    return (
        <div>
           <ul>
                <li>
                    <Link to="/option/1"> option one </Link>
                </li>
                <li>
                    <Link to="/option/2"> option two </Link>
                </li>
           </ul> 
        </div>
    )
}

export default Help;
