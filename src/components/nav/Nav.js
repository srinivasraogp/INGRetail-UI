import React, { Component } from "react";
import nav from './nav.css';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <div>
              <div class="navbar">
               
                <Link className="nav" to='/reset'>Reset password</Link>
                <Link className="nav" to='/add'>Add Account</Link>
                <Link className="nav" to='/transfer'>Fund Transfer</Link>
                <Link className="nav" to='/history'>Transaction History</Link>
                <Link className="nav" to='/kyc'>KYC Details</Link>
                </div>
            </div>
        );
    }
    }
    export default Nav;