var App = require('./App');
var Dashboard = require('./Dashboard');
var About = require('./About');
var Webpack= require('./Webpack');
var filetypepng= require('./filetype.png');
var filetypepdfpng= require('./filetype_pdf.png');
var React  = require('react');
var ReactDom  = require('react-dom');
var Hero= require('./Hero');
var { Router, Route, Link, IndexRoute,browserHistory } = require('react-router');

var routes = (
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Dashboard} />
      <Route path="/webpack" component={Webpack} />
      <Route path="/hero/:heroId" component={Hero} />   
    </Route>
  </Router>
);




ReactDom.render(routes, document.getElementById('app'));



