import React, { Component } from 'react';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class Header extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered')
  return (
  	<div className="container">
    	<br />
    	<ul className="nav nav-pills pull-right">
    		<li className="active"><a href="#">Home</a></li>
    		<li><a href="#">SignUp</a></li>
    		<li><a href="#">Login</a></li>
    	</ul>
    </div>
    
    );
    
   }
 }

export default Header;