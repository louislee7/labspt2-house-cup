import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
//landingPage imports:
import LandingPage from './sub-components/LandingPage'
//Admin import(s):
import HousesPage from './sub-components/HousesPage';
//Settings import(s):
import SettingsPage from './sub-components/SettingsPage';
//SignupPage import
import SchoolsPage from './sub-components/SchoolsPage';
//adminAnalyticsPage
import AdminAnalyticsPage from './sub-components/analytics/AdminAnalyticsPage';
//CallbackPage for Auth0.js
import Callback from './Callback.js';
//Secured Route
import SecuredRoute from './sub-components/SecuredRoute';
//Auth0.js
// import NavBar from './sub-components/NavBar';
import BillingPage from './sub-components/BillingPage';
//About.js
import auth from './utils/Auth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolsList: [],
    }
  }

  componentDidMount = () => {

    const { silentAuth } = auth;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      silentAuth();
    }

    this.fetchSchools();
  }

  fetchSchools = e => {
    axios.get('http://localhost:5000/schools')
      .then(response => {
        if (response) {
          this.setState({ schoolsList: response.data.data.schools })
        } else {
          console.log(`There is no response from the server`);
        }
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Route exact
          path='/'
          render={(props) =>
            <LandingPage {...props}
              schoolsSelected={this.state.schoolsList} />} />
        <Route exact
          path='/callback'
          render={(props) => <Callback />} />
        <Route exact
          path='/admin/schools'
          render={(props) =>
            <SchoolsPage {...props}
              schoolsList={this.state.schoolsList}
              houseList={this.state.testData}
              fetchSchools={this.fetchSchools}
            />
          } />
        <Route exact
          path='/admin/schools/:id'
          render={(props) =>
            <HousesPage {...props}
              fetchSchools={this.fetchSchools}
            />}
        />
        <SecuredRoute exact
          path='/admin/billing'
          component={BillingPage} />
        <SecuredRoute exact
          path='/admin/analytics'
          HouseData={this.state.houseData}
          component={AdminAnalyticsPage} />
        <SecuredRoute exact
          path='/admin/settings'
          component={(props) => <SettingsPage {...props} />} />

      </div >
    );
  }


}
export default App;