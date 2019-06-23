import React, { Component } from 'react';
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom';
import Home from './components/homePage/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Summary from './components/summary/Summary';
import Admin from './components/admin/Admin';
import {withTranslation} from 'react-i18next';
import Kyc from './components/kyc/Kyc';
import Reset from './components/reset/Reset';
import Nav from './components/nav/Nav';
import AddAccount from './components/addAccount/AddAccount';
import FundTransfer from './components/fundtransfer/FundTransfer';
import TransactionHistory from './components/transactionHistory/TransactionHistory'

class App extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    i18n.changeLanguage('en');

    this.state={
      isLoggedIn: false
    }
  }
  redirect=(page, history)=> {
    history.push(page);
  }

  vaidateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn});
  }
  render() {

    return (
      <div>
        <HashRouter>
          <Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/>
          <div>

            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/home' component={Home}  />
              <Route path='/login' component={()=><Login vaidateUser={this.vaidateUser}/>} />
              <Route path='/logout' component={Logout} />
              <Route path='/reg' component={()=><Register vaidateUser={this.vaidateUser}/>} />>
              <Route path='/kyc' component={Kyc} />
              <Route path='/summary' component={Summary} />
              <Route path='/add' component={AddAccount} />
              <Route path='/reset' component={Reset} />
              <Route path='/admin' component={Admin} />
              <Route path='/nav' component={Nav} />
              <Route path='/transfer' component={FundTransfer} />
              <Route path='/history' component={TransactionHistory} />
      
              </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default withTranslation()(App);