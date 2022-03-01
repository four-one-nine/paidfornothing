import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import {Button} from './components/Button'
import UserForm from './components/UserForm'
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earnedIncome: 0
    }
  }

updateEarnedIncome(newIncomeAmount) {
  this.setState({
    earnedIncome: newIncomeAmount
  })
}

render() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact />
        </Routes>
        
        <div className='page-container'>
        <Navbar />
          <div className='app-container'>
            <div className="counter-container">
              <h2 className='h2'>So Far you've earned</h2>
              <h1 className='h1'>${parseFloat(this.state.earnedIncome).toFixed(2)}</h1>
              <h2 className='h2'>For doing nothing!</h2>
            </div>
            <UserForm 
            changeIncome={this.updateEarnedIncome.bind(this)}
            />
            </div>
          </div>
        
      </Router>
    </div>
  );
}
}
