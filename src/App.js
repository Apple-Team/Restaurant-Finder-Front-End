import React, { Component } from 'react';
import './App.css';
import Logo from './logo';
import IconText from './IconText';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }
   
  // `render` is called whenever the component's props OR state are updated.
  render() {
    // console.log('The App component was rendered');

    return (

    <div className="App">
       
      <div className="App1">

        <div className="container">
          <br />
          <ul className="nav nav-pills pull-right">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div className="wrapper">
          <div className="container">
           <br /><br /><br  /><br /><br /><br  /><br /><br /><br />


            <div className="form-horizontal">
            <input type="text" name="..." className="form-control" placeholder="Hungry??  Find your favourite Bistro........"/>
              <button type="submit" className="btn btn-primary" >
                <i className="glyphicon glyphicon-search"></i>
                </button>
            </div>
          </div>
<br /><br /><br  />

 <div className="row text-center">
  <div className="col-sm-4">
    <div className="img-responsive">
      <a href="#"><img src={require('./images/sb.jpg')} alt="Paris" /></a>
    </div>
    <p><i>Sunday Brunch</i></p>
  </div>
  <div className="col-sm-4">
    <div className="img-responsive">
      <a href="#"><img src={require('./images/fd.jpg')} alt="New York" /></a>
    </div>
    <p><i>Frozen Delight</i></p>
    </div>
  <div className="col-sm-4">
    <div className="img-responsive">
     <a href="#"><img src={require('./images/street.jpg')} alt="San Francisco" /></a>
    </div>
    <p><i>Street Food</i></p>
  </div>
</div>
<br /><br /><br />
<div className="row text-center">
  <div className="col-sm-4">
    <div className="img-responsive">
      <a href="#"><img src={require('./images/dinner.jpeg')} alt="Paris" /></a>
    </div>
    <p><i>Fine Dine</i></p>
  </div>
  <div className="col-sm-4">
    <div className="img-responsive">
      <a href="#"><img src={require('./images/buffet.jpg')} alt="New York" /></a>
    </div>
    <p><i>Buffet</i></p>
  </div>
  <div className="col-sm-4">
    <div className="img-responsive">
      <a href="#"><img src={require('./images/dessert.jpg')} alt="San Francisco" /></a>
    </div>
    <p><i>Desserts</i></p>
  </div>
</div>



     </div>
    </div>
</div>


    );
  }
}

export default App;