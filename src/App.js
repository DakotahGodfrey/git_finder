import React from 'react';
import Navbar from './Components/layout/Navbar/Navbar';
import Alert from './Components/layout/Alert/Alert';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './Components/Users/User';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
