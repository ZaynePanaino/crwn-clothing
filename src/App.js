import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscripeFromAuth = null

  componentDidMount() {
    this.unsubscripeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscripeFromAuth();
  }

 render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />  
    <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route path='/shop' component= {ShopPage} />
        <Route path='/signin' component= {SignInandSignUpPage} />
      </Switch>
    </div>
  );
 }
}

export default App;
