import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': 'Hong Gil Dong',
  'birthday': '19961222',
  'gender': 'male',
  'job': 'student'
};

class App extends Component {
  render(){
    return (
      <div className='gray-background'>
        <h2>Let's develop management system!</h2>
        <Customer
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
      </div>
    )
  }
}

export default App;
