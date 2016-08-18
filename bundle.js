var BandGrid = React.createClass({
  displayName: "BandGrid",

  render: function () {
    return React.createElement(BandCard, null);
  }
});

var BandCard = React.createClass({
  displayName: "BandCard",

  render: function () {
    return React.createElement(
      "div",
      { className: "bandCard" },
      React.createElement(BandDetails, null)
    );
  }
});

/* Band Details*/
var BandDetails = React.createClass({
  displayName: "BandDetails",

  render: function () {
    return React.createElement(
      "div",
      { className: "band" },
      React.createElement(
        "h3",
        { className: "bandName" },
        this.props.name
      ),
      React.createElement(
        "h4",
        { className: "bandYear" },
        this.props.year
      )
    );
  }
});

ReactDOM.render(React.createElement(BandGrid, null), document.getElementById('band-grid'));
