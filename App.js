import React, { Component } from 'react';
import './App.css';
import Logo from './logo';
import IconText from './IconText';

// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the class extends another class
    super();

    // Initialize state in the constructor; this is the only place you
    // can set the state directly without using `this.setState`
    this.state = { text: '' };

    // This binding is necessary to make `this` work in the callback
    this.updateText = this.updateText.bind(this);
  }

  // Keep the state in sync with the textarea's value
  updateText(ev) {
    // Access the textarea's value just like you would with the brower's native events
    const value = ev.currentTarget.value;

    // WRONG: this.state.text = value;
    this.setState({ text: value });
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
              <li><a href="#">Home</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Login</a></li>
          </ul>
          <span><Logo /></span>
      </div>
      <div className="wrapper">
           <div className="container">
           <br />
           <br />
           <br/>
           <br/>
           <textarea className="form-control"  value={this.state.text}/ >
       </div>
     </div>
    </div>
  </div>

    );
  }
}

export default App;
