var BandGrid = React.createClass({
  displayName: "BandGrid",

  render: function () {
    return React.createElement(
      "div",
      { className: "bandGrid" },
      React.createElement(
        BandCard,
        { bandname: "Roz Raskin", year: "2006" },
        "Here's some text about the band!"
      ),
      React.createElement(
        BandCard,
        { bandname: "Arc Iris", year: "2009" },
        "Here's some MORE text about the band!"
      )
    );
  }
});

/* Band Details*/
var BandCard = React.createClass({
  displayName: "BandCard",

  render: function () {
    var md = new Remarkable();
    return React.createElement(
      "div",
      { className: "bandCard" },
      React.createElement(
        "h3",
        { className: "bandName" },
        this.props.bandname
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
