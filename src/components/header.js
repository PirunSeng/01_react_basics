import React, { Component } from 'react';
import '../css/styles.css'

// const getYear = () => {
//   const newDate = new Date();
//   return newDate.getFullYear();
// }

// const user = {
//   firstName: 'Pirun',
//   lastName: 'Seng',
//   gender: 'Male',
// }

class Header extends Component {
  constructor (){
    super()
    this.state = {
      // active: 'non-active',
      keywords: ''
    }
  }

  inputChangeHandler = (event) => {
    // const value = event.target.value === '' ? 'non-active' : 'active'
    this.setState({
      // active: value,
      keywords: event.target.value
    })
  }

  render(){

    return (
      // <header style={{background: `${this.state.active ? 'green' : 'red'}`}}>
      // <header className={this.state.active}>
      <header>
        <div className='logo'>Logo: </div>
        <input
          type='text'
          onChange={ this.inputChangeHandler}/>
      </header>
    )
  }
}

export default Header;

// There are 2 types of components.
// 1. Funcitonal component: does not care what others do.
// It just knows its job is to return/do something.
// 2. Class base component: needs to know what happen.

// this.inputChangeHandler() : will call the function once immediately when the page load.
