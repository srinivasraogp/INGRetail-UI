import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class FundTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundData: {
                fromAccount:"",
                toAccount:"",
                transferAmount:"",
                description:""
        }}
      }
      componentDidMount(){
        const {registerData}=this.state;
           console.log(this.state.registerData,'23456');
      }
  FundHandler = (event)=>{
    const {registerData}=this.state;
    registerData[event.target.name]=event.target.value;
    this.setState({registerData});
    localStorage.setItem("firstName",this.state.registerData.firstName);
    localStorage.setItem("lastName", this.state.registerData.lastName);
    console.log(this.state.registerData, "name");
  }
  Transfer =(event)=>{
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
          <h1 align="center" className='head'>Fund Transfer<hr className="hr"/></h1>
          <div className="form-group">
                  <label>From Account</label>
                  <input type="text" className="form-control" id="firtName"  placeholder="From Account Number"  name="fromAccount"  onChange={this.FundHandler}/>
              </div>
              <div className="form-group">
                  <label>To Account</label>
                  <input type="text" className="form-control" id="lastName"  placeholder="To Account Number"  name="toAccount"  onChange={this.FundHandler}/>
              </div>
              <div className="form-group">
                  <label>Amount To Transfer</label>
                  <input type="number" className="form-control" id="contactNumber"  placeholder="Amount To Transfer" name="transferAmount"  onChange={this.FundHandler}/>
              </div>
              <div className="form-group">
                  <label>Comments</label>
                  <input type="email" className="form-control" id="email"  placeholder="COmments" name="description"  onChange={this.FundHandler}/>
              </div>
              <div>
                  <button className="but" id="btn1" onClick={this.Transfer}>Transfer</button>
                  <button className="but" id="btn2" type='reset'>Cancel</button>
              </div>
          </form>
      </div>
    )
  }
}
export default withRouter(FundTransfer);

