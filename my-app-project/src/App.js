import React, { Component } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import User from './components/User';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h4>Buraya Bazi Bölümler Eklenecek</h4>
        <Navbar title = "User App"/>
        <hr />
        <User
          name="Batuhan Salkım"
          department="technology"
          salary = "5000"
        />

        <User
          name="Tunahan Salkım"
          department="sales"
          salary="7000"
        />
      </div>
    )
  }
}

