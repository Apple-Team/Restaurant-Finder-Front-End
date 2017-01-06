import React, { Component } from 'react';
import './App.css';

import Collection from './collection';
import Header from './Header';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered')
  return (

   <div className="App">
    <Header /><br />
    <div className="App1">
   	  
      <div className="container">          
         <center><input type="text" size="70" height="50px" placeholder="   Hungry??  Find your favourite Bistro........"/>
         &nbsp;
         <button type="submit" className="btn btn-primary" >
         <i className="glyphicon glyphicon-search"></i>
         </button></center>
      </div>
      </div>
      <Collection />
    </div>

    );
    
   }
 }

export default App;