//'use strict';
//
// var component = require('./component');
//
// document.body.appendChild(component());

var React = require('react');
var AppComponent = require('./productBox.jsx');


React.render(
    <AppComponent /> ,
    document.getElementById('content')
)