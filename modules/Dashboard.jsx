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





var Dashboard= React.createClass({

  getInitialState: function() {
    return {data:data};
  },


  render: function() {
    return (
      <div>
	<h1>
	  DashBoard
	</h1>
	<Heroes data={this.state.data}></Heroes>
      </div>
    );
  }
});

module.exports = Dashboard;
