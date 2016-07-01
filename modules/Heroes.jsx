var React = require('react');
var Hero= require('./Hero');
var {browserHistory} = require('react-router');
var HeroActions = require('./actions/HeroActions');

require('./heroes.css');
var Heroes= React.createClass({

 

  delete: function(hero) {
    HeroActions.destroy(hero.id);
  },
  update:function(id) {
    browserHistory.push('/hero/' + id);
  },
  create:function(id) {
    browserHistory.push('/hero/0');
  },

  render: function() {
    return (
      <div>
      <h1>Heroes List</h1>


      <ul className="heroes">
      {this.props.data.map( (hero,i) =>
	<li key={i}>
	 <span className="hero-element" onClick={this.update.bind(this,hero.id)}>
	    <span className="badge">{hero.id}</span> {hero.name}
	  </span>
	 <input type='button'  onClick={this.delete.bind(this,hero)} value='Delete'/>
	</li>
	)}
      </ul>
      <input type='button' onClick={this.create} value='Create'/>
      </div>
    );
  }
});

module.exports = Heroes;
