import React, {Component} from 'react';

// routing imports
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// connect to redux state
import {connect} from 'react-redux';

// my components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import UserNav from '../UserNav/UserNav';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
import FestivalDetail from '../FestivalDetail/FestivalDetail';
import BandInfoForm from '../BandInfoForm/BandInfoForm';
import FestivalRespondents from '../FestivalRespondents/FestivalRespondents';
import CreateFestForm from '../CreateFestForm/CreateFestForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

// import styles
import './App.css';





class App extends Component {

  // get user info on component load
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <UserNav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            /> */}
            <ProtectedRoute
              exact
              path="/festivaldetail"
              component={FestivalDetail}
            />
            <ProtectedRoute
              exact
              path="/tourinfo"
              component={BandInfoForm}
            />
            <ProtectedRoute
              exact
              path="/adminhome"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/createfest"
              component={CreateFestForm}
            />
            <ProtectedRoute 
              exact
              path="/festresponse"
              component={FestivalRespondents}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
