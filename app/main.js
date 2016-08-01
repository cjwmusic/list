//'use strict';
//
// var component = require('./component');
//
// document.body.appendChild(component());

var React = require('react');
var ReactDom = require('react-dom');

var ConversationCell = require('./component/chat/conversationList.jsx');

var user = {
    avatar : "http://img1.ph.126.net/njuQr62_hau5OdrBOTPJRQ==/6631462490373753037.jpg",
    nick   : "专业摄影"
};

ReactDom.render(
    <ConversationCell user={user}/>,
    document.getElementById('content')
)