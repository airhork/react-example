var React = require('react');
var Hero= require('./Hero');
var {browserHistory} = require('react-router');

require('./heroes.css');
var Heroes= React.createClass({

 

  getInitialState: function() {
    return {data: this.props.data, extra : 'extra'};
  },
  delete: function(hero) {
    var newList = this.state.data.filter(h => h.id !== hero.id);
    this.setState({data:newList});
  },

  update:function(id) {
    browserHistory.push('/hero/' + id);
  },
  refresh : function(newName) {
    this.state.data.push({name: newName, id:3});
    this.setState(this.state);
  },
  create:function(id) {
    browserHistory.push('/hero/0');
  },

  render: function() {
    return (
      <div>
      <h1>Heroes List</h1>


      <ul className="heroes">
      {this.state.data.map( (hero,i) =>
	<li key={i}>
	 <span className="hero-element" onClick={this.update.bind(this,hero.id)}>
	    <span className="badge">{hero.id}</span> {hero.name}
	  </span>
	 <input type='button'  onClick={this.delete.bind(this,hero)} value='Delete'/>
	</li>
	)}
      </ul>
      <Hero  onCreate={this.refresh}></Hero>
      </div>
    );
  }
});

module.exports = Heroes;
