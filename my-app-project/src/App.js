import React, { Component } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import User from './components/User';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h4>Buraya Bazi Bölümler Eklenecek</h4>
        <Navbar />
        <hr />
        <User
          name="Batuhan Salkim"
          department="Bilişim"
          salary = "5000"
          age = "30"
        />

        <User
          name="Tunahan Salkım"
          department="sales"
          salary="7000"
          age="30"
        />

        <User
          name="Tunahan Salkım"
          department="sales"
          salary="7000"
          age="30"
        />
      </div>
    )
  }
}

