var React = require('react');
var HeroStore = require('./stores/HeroStore');
var HeroActions = require('./actions/HeroActions');
var {browserHistory} = require('react-router');

var Hero= React.createClass({

  getInitialState: function() {
    if(this.props.params && this.props.params.heroId > 0) {
      var heroes = HeroStore.getAll();
      var selected = null;
      heroes.forEach(hero => {
	if(hero.id == this.props.params.heroId) {
	  selected = hero;
	}
      });

      return {name: selected.name, id: selected.id};

    }
    return {name: '', id: 0};
  },
  save: function() {
    var name = this.state.name;

    if(this.state.id && this.state.id > 0) {
      HeroActions.updateHero(this.state.id,name);
    } else {
      HeroActions.create(name);
    }
    browserHistory.push('/home');

  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  render: function() {
    return (
      <div>
      <div>
      ---------------New-----------------
      </div>
      <div>
        Name : <input
          type="text"
          placeholder="Your name"
	  value={this.state.name}
          onChange={this.handleNameChange}
        />
	<div>
	id : {this.state.id}
	</div>
      </div>
      <input type='button' value='Create' onClick={this.save}/>
      </div>
    );
  }
});

module.exports = Hero;
