var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
	image <img src={require('./filetype.png')}></img>
	pdfimage <img src={require('./filetype_pdf.png')}></img>
      </div>
    );
  }
});

module.exports = About;
