import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './App';
import './App.css';


const user = {
  name: 'Sabina',
  email: 'sebinememmedova604@gmail.com',
  address: 'Azerbaijan,Baku',
  age: 20,
  gender: 'Female',
};

ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
