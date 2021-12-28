import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Hong Gil Dong',
  'birthday': '19961222',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Lee Do',
  'birthday': '19910515',
  'gender': 'male',
  'job': 'teacher'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Lee Sun Sin',
  'birthday': '19931020',
  'gender': 'male',
  'job': 'programer'
},
];

class App extends Component {
  render(){
    return (
      <div className='gray-background'>
        {
          customers.map(c => {
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
