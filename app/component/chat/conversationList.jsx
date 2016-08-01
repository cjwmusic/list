var React = require('react');
var Style = require('./conversationList.css');

module.exports = React.createClass({

    componentWillMount: function() {
        Style.use()
    },

    componentWillUnmount: function() {
        Style.unuse()
    },

    render : function () {
        var user = this.props.user;

        return (
            <div className="cell">
                <div className="avatar" style={{backgroundImage : 'url(' + user.avatar + ')'}}></div>
                <div className="nick">{user.nick}</div>
            </div>
        );
    }
});
