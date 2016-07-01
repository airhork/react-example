var React = require('react');
var Heroes= require('./Heroes');

var data = [{name : 'Max Zhang', id : 1},{name : 'Max Wang', id : 2}];
var Dashboard= React.createClass({


render: function() {
    return (
      <div>
	<h1>
	  DashBoard
	</h1>
	<div>
	image <img src={require('./filetype.png')}></img>
	pdfimage <img src={require('./filetype_pdf.png')}></img>
	</div>
	<Heroes data={data}></Heroes>
      </div>
    );
  }
});

module.exports = Dashboard;
