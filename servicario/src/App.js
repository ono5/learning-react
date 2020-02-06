import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import HomePage from './pages/Home'
import Faq from './pages/Faq'
import Profile from './pages/Profile'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from 'components/Sidebar'

import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
