var React = require('react');
var Style = require('./pro.css');


var ProductBox = React.createClass({

    componentWillMount : function () {
        Style.use();
    },

    componentWillUnmount: function() {
        Style.unuse()
    },

    render : function () {
        return (
            <div className="productbox">
                This is beautiful girl.
            </div>
        );
    }
});

module.exports = ProductBox;