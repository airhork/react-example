var React = require('react');

var Hero= React.createClass({

  getInitialState: function() {
    return {name: '', id: 0};
  },
  create: function() {
    var name = this.state.name;
    this.props.onCreate(name);
    setState({name:''});
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
      </div>
      <input type='button' value='Create' onClick={this.create}/>
      </div>
    );
  }
});

module.exports = Hero;
