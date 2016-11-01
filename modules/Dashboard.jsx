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
    window.addEventListener("message", function(event) {
        console.log('in the react app ' + event.data);
        document.getElementById("forei").innerText=event.data;}, false);   
    return {data:data};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  shoot : function() {
    for(var i = 0; i< 2000; i++) {
      data.push({id : nextId++, name : makeid()});
    }
    this.setState({data:data});
  },
  send : function() {
    window.parent.postMessage(this.state.name, '*');
  },


  render: function() {
    return (
      <div>
      <div>
      <input type="text" id="xeroid" value={this.state.name}  onChange={this.handleNameChange}/>
      <input type="button" onClick={this.send} value="send to EI xero" />
      </div>
      <div >
        The content from EI Xero: <span id="forei" ></span>
      </div>
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
