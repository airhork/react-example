var React = require('react');
var Hero= require('./Hero');
var {browserHistory} = require('react-router');

var Heroes= React.createClass({

  getInitialState: function() {
    return {data: this.props.data, extra : 'extra'};
  },
  edit : function(hero) {
    alert(hero.name);
  },
  update:function() {
    browserHistory.push('/hero/1');
  },
  refresh : function(newName) {
    this.state.data.push({name: newName, id:3});
    this.setState(this.state);
  },

  render: function() {
    return (
      <div>
      <h1>Heroes List</h1>
      {this.props.data.length}
      <input type='button' onClick={this.update} value='Update'/>

      <div>
        {this.state.extra}
      </div>

      {this.state.data.map( (hero,i) =>

	<div key={i}>
	Name : {hero.name} <input type='button'  onClick={this.edit.bind(this,hero)} value='Edit'/>
	</div>
	)}
      <Hero  onCreate={this.refresh}></Hero>
     
      </div>
    );
  }
});

module.exports = Heroes;
