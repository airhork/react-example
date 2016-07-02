var React = require('react');
var Heroes= require('./Heroes');


var data = [ {id: 11, name: 'Max Zhang'},
      {id: 12, name: 'Narco Dong'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}];


var nextId = 21;

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}





var Dashboard= React.createClass({

  getInitialState: function() {
    return {data:data};
  },


  shoot : function() {
    for(var i = 0; i< 2000; i++) {
      data.push({id : nextId++, name : makeid()});
    }
    this.setState({data:data});
  },


  render: function() {
    return (
      <div>
	<h1>
	  DashBoard
	</h1>
	<input type='button' value="2000 data" onClick={this.shoot}/>
	<Heroes data={this.state.data}></Heroes>
      </div>
    );
  }
});

module.exports = Dashboard;
