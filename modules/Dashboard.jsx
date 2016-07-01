var React = require('react');
var Heroes= require('./Heroes');
var HeroStore = require('./stores/HeroStore');
var HeroActions = require('./actions/HeroActions');



function getAllHeros() {
    return HeroStore.getAll();
}

var Dashboard= React.createClass({

  getInitialState: function() {
    return {data:getAllHeros()};
  },

  componentDidMount: function() {
    HeroStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    HeroStore.removeChangeListener(this._onChange);
  },


   _onChange: function() {
    console.log('inside on change');
    console.log(getAllHeros());
    var copiedData = [];
    getAllHeros().forEach(hero =>{
      copiedData.push(hero);
    });
    this.setState({data:copiedData});
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
