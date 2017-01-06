import React, { Component } from 'react';
class Logo extends Component {
  constructor() {
    super();
}
render() {
  // console.log('The App component was rendered');

  return (
    <div className="Logo">
     <center><img src={require('./images/logo.png')} className="img-circle" alt="Cinque Terre" width="100px" height="150px"  /></center>
     </div>
   );
 }
 }
 export default Logo;
