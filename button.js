import React from 'react';

const button = React.createClass({
  render() {
    return <button onclick="document.getElementById('id01').style.display='block'" style={{
        width: 'auto'
      }}>Login</button>;
  }
});

export default button;

