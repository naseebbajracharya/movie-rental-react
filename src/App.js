import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import './App.css';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      {/* <Movies /> */}
      <Switch>
      <Route path="/movies" component={Movies}></Route> 
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to="/not-found"/>
      </Switch>
      </main>
      </React.Fragment>
  );
}

export default App;
