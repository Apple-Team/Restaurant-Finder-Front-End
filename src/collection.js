import React, { Component } from 'react';
class Collection extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {

    let collections = [
    {
     name:'Sunday Brunch',
     image:require('./images/sb.jpg')

   },
   {
    name:'Frozen Delight',
    image:require('./images/fd.jpg')
  },
  {
    name:'Street Food',
    image:require('./images/street.jpg')
  },
  {
    name:'Fine Dine',
    image:require('./images/street.jpg')
  },
  {
    name:'Barbeque & Grills',
    image:require('./images/bb.jpg')
  },
  {
    name:'Breakfast',
    image:require('./images/bf.jpg')
  }
  ]
return (
  <div className="wrapper1">
    <br />

    <div className="row text-center">
    {
      collections.map(function(item, index){
        return (
        <div className="col-md-4">
          <div className="img-responsive">
            <a href="#"><img src={item.image} alt="Paris" /></a>
          </div>
          <p><i>{item.name}</i></p>
        </div> )
      })
    }
  </div>
 </div>
 );
 }
}
export default Collection;


