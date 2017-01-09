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
  <div className="wrapper1" id="collections">
    <br />
    <div className="row">
      <div className="col-l-2by3">
        <div className="collections-grid row">
        {
          collections.map(function(item, index){
            return (
              <div className="col-l-8 col-s-16 mbot">
                <div className="ui fluid card"><a href="#">
                  <div className="row">
                    <div className="col-s-7">
                      <div title="hh">
                       {item.image}
                      </div>
                    <div className="col-s-9">
                      <div className="row">
                        <div className="ptop0 mr20 ml5 coll_detail">                                                            
                          <div className="heading bold ln20">{item.name}</div>
                          <div className="zblack fontsize4 description mt5  hp ">The most popular restaurants in town this week</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></a>
              </div>
            </div>
  )
      })
    }
    </div>
    </div>
    </div>
    </div>
);}
}

export default Collection;
