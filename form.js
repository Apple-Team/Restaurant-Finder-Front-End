import React, { Component } from 'react';
import './form.css';
import Button1 from './button';
class form extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
    this.state = {
      formVisible: true,
    };
  }

  handleVisible(){
      this.setState({formVisible:false});
    }

  render() {
      const formVisible = this.state.formVisible;
    return (
      <form className="modal-content animate">
        <div className="imgcontainer">
          <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span>
          <img src={require('./images/images.jpg')} alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label><b>Username</b></label> 
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit">Login</button>
          <input type="checkbox" /> Remember me
        </div>
        <div className="container" style={{
        backgroundColor: '#f1f1f1'
      }}>
          <button type="button" onClick={this.handleVisible} className="cancelbtn">
          {this.state.formVisible ? (<form />) : <Button1 />}
          Cancel</button>
          <span className="psw"><a href="#">Forgot password?</a></span>
        </div>
      </form>
      );
  }
}

export default form;