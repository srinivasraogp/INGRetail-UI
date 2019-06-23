import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Link} from 'react-router-dom';

class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
              firstName:"",
              lastName:"",
              contactNumber:"",
              city:"", 
              accountType:"",
              email:""
        }}
    }
   render() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
     const{registerData}=this.state;
    console.log(registerData);
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <button><Link to="/summary">Summary</Link></button>
          <h1 align="center" className='head'>Reset Password<hr className="hr"/></h1>
              <div className="form-group">
                  <label>Old Password</label>
                  <input type="text" className="form-control" id="firtName"  placeholder="Old Password"   name="firstName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>New Password</label>
                  <input type="text" className="form-control" id="lastName"  placeholder="New Password"  name="lastName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="number" className="form-control" id="contactNumber"  placeholder="Confirm Password" name="contactNumber"  onChange={this.RegisterHandler}/>
              </div>
              <div>
                  <button className="but" id="but">Save</button>
                  <button className="but" id="but" type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Reset;

