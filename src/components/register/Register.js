import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
              firstName:"",
              lastName:"",
              contactNumber:"",
              city:"", 
              accountType:"",
              email:"",
        }}
      }
      componentDidMount(){
        const {registerData}=this.state;
           console.log(this.state.registerData,'23456');
      }
  RegisterHandler = (event)=>{
    const {registerData}=this.state;
    registerData[event.target.name]=event.target.value;
    this.setState({registerData});
    localStorage.setItem("firstName",this.state.registerData.firstName);
    localStorage.setItem("lastName", this.state.registerData.lastName);
    console.log(this.state.registerData, "name");
  }
  register =(event)=>{
    const{res} = this.state;
    event.preventDefault();
    const{registerData}=this.state;
    // const res = localStorage.getItem('res');
    this.getLoginData(registerData).then(response=> {
      console.log(response);
      this.setState({ res: response.data });
      
    }).catch(error=> {
      console.log(error);
      alert(error.message)
    })
    
  }
  
  getLoginData = (registerData) => {
    return new Promise((resolve, reject) => {
      this.props.history.push("/home");
      this.props.vaidateUser(false);
      axios.post('http://10.117.189.202:7777/retailbank/ingretail/registration',registerData).then( (response)=> {
        resolve(response); 
        alert("User Registration Successful!");
        this.props.history.push("/home");       
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  
   render() {
    const res = localStorage.getItem('res');
     const{registerData}=this.state;
    console.log(registerData);
    return (
      <div className="header  ">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <form className='container bord'>
          <h1 align="center" className='head'>User Register<hr className="hr"/></h1>
          <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" id="firtName"  placeholder="First Name"  name="firstName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" id="lastName"  placeholder="Last Name"  name="lastName"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>Contact Number</label>
                  <input type="number" className="form-control" id="contactNumber"  placeholder="Contact Number" name="contactNumber"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
              <label>Account Type</label>
              <select  className="form-control" name="accountType" onChange={this.RegisterHandler}>
                  <option>Account-type</option>
                  <option value="savings">Savings</option>
                  <option value="current">Current</option>
             </select>
              </div>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id="email"  placeholder="Email" name="email"  onChange={this.RegisterHandler}/>
              </div>
              <div className="form-group">
                  <label>City</label>
                  <input type="text" className="form-control" id="city"  placeholder="City" name="city"  onChange={this.RegisterHandler}/>
              </div>
              <div>
                  <button className="but" id="btn1" onClick={this.register}>Register</button>
                  <button className="but" id="btn2" type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default withRouter(Register);

