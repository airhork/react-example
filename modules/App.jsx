var React = require('react');
var {Link} = require('react-router');

require('./App.css');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
	    <nav className='abc'>
	      <Link to="/home">Home</Link>
	      <Link to="/about">About</Link>
	      <Link to="/webpack">Webpack</Link>
	    </nav>
          </ul>
        </header>

     <div className="detail">
          {this.props.children}
        </div>
	
      </div>
    );
  }
});

module.exports = App;
