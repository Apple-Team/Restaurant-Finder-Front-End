import React, { Component } from 'react';
import './App.css';

import Collection from './collection';
import Header from './Header';
import Button from './button';
import Form from './form';
// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.
var scrollTop=0;
var that;

class App extends Component {
	constructor() {
		// In a constructor, call `super` first if the className extends another className
		super();
		this.state = {
      collapsed: true,
      navScroll:false,
      isLoggedIn:false,
    };
    this.handleClick = this.handleClick.bind(this);
	}

	toggleCollapse() {
      const c= !this.state.collapsed;
      this.setState({collapsed:c});
  }

  handleScroll(ev) {
    scrollTop=ev.srcElement.body.scrollTop;
    if(scrollTop>=100){
        that.setState({navScroll:true});
    }
    else{
        that.setState({navScroll:false});
    }
  }

  componentDidMount() {
    that=this;
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick(){
  	this.setState({isLoggedIn:true});
  }

	// `render` is called whenever the component's props OR state are updated.
	render() {
		// console.log('The App component was rendered')
		const isLoggedIn = this.state.isLoggedIn;
		  const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    const navScroll = this.state.navScroll?"scrolled-nav":"";
	return (
	 <div>
	 		<div className="App">
					<nav className="navbar navbar-default navbar-fixed-top">
							<div className="container-fluid">
			 						<div className="navbar-header page-scroll">
											 <button type="button" className="navbar-toggle navbar-right" onClick={this.toggleCollapse.bind(this)} data-target="#bs-example-navbar-collapse-1">
														<span className="sr-only">Toggle navigation</span>
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>
														<span className="icon-bar"></span>                         
											 </button>
											<a className="navbar-brand" href="#myPage">Find'O Bistro</a>
			 						</div>
											<div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
											    <ul className="nav navbar-nav navbar-right">
													 <li><a href="#">HOME</a></li>
													  <li><a href="#collections">COLLECTIONS</a></li>
														<li><a href="#"><span className="glyphicon glyphicon-user"></span>SIGN UP</a></li>
														<li><a href="#"><span className="glyphicon glyphicon-log-in"></span>LOGIN</a></li>
				 								</ul>
				 							</div>
							</div>
	 				</nav>
		</div>
		<div className="App1">
				<div className="txt">
				 		<div className="input-group">
								 <input type="text" placeholder="Hungry??  Find your favourite Bistro...." className="form-control" /> 
									<span className="input-group-btn">
									<button className="btn btn-danger" type="button" >
									<i className="glyphicon glyphicon-search"></i></button>
									</span>
						</div>
				</div>
		 </div>
		 <button onClick={this.handleClick}> {this.state.isLoggedIn ? <Form /> : <Button />} </button>
		<Collection />

		</div>


		);
		
	 }
 }

export default App;