import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import summary from './summary.css';
import Nav from '../nav/Nav';
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarylist: []
     
    }
  }
  componentDidMount() {
    this.getData().then(response => {
        
      this.setState({ summarylist: [response.data] });
      console.log(this.state.summarylist)
    });
  }
  getData = () => {
    const userId = localStorage.getItem('userId');
    const{post} =this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.28:7777/retailbank/ingretail/summary/1`).then(function (response) {
        resolve(response);
        console.log('summary',response)

        console.log(this.state.summarylist)
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    return(
      <div>
          <div>
            <Nav/>
         </div>
         <div className="container border">
          <h3> Summary Page</h3><hr className="h"/>
          {
          this.state.summarylist.map((item, i) => {
                                return (
                                    <div class="row" key={i}>
                        <span><div class="col-sm-4 ">{item.firstName}</div></span>
                        <span><div class="col-sm-12 ">{item.lastName}</div></span>
                       
                        {
    item.accounts.map((item1, i) => {
                                return (
                                    <div class="row card-body" key={i}>
                        <div class="col-sm-4 product card-title">Account Number:{item1.accountNumber}</div>
                        <div class="col-sm-12 product1 card-title">Account Type:{item1.accountType}</div>
                        <div class="col-lg-12 product2 card-title">Account Balance:{item1.balance}</div>
                        <hr className="hr"/>
                                </div> );
        }                            
    )
                                }
                                </div> );
        }                            
    )
                                }

          </div> 
                 
                  </div>
    )
  }
}
export default Summary;

