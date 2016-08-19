/* Test JSON */
var data = [{ id: 1, bandName: "Roz Raskin and the Rice Cakes", year: 2005, bio: "Here's a blurb about the band!" }, { id: 2, bandName: "Arc Iris", year: 2006, bio: "Here's a blurb about the band!" }, { id: 3, bandName: "Harry and the Potters", year: 2002, bio: "Here's a blurb about the band!" }];

var BandContainer = React.createClass({
  displayName: "BandContainer",

  render: function () {
    return React.createElement(
      "div",
      { className: "bandContainer" },
      React.createElement(BandGrid, { data: this.props.data })
    );
  }
});

var BandGrid = React.createClass({
  displayName: "BandGrid",

  render: function () {
    var bandMap = this.props.data.map(function (band) {
      return React.createElement(BandCard, { key: band.id, bandName: band.bandName, year: band.year, bio: band.bio });
    });
    return React.createElement(
      "div",
      { className: "bandGrid" },
      bandMap
    );
  }
});

/* Band Details*/
var BandCard = React.createClass({
  displayName: "BandCard",

  render: function () {
    return React.createElement(
      "div",
      { className: "bandCard" },
      React.createElement(
        "h3",
        { className: "bandName" },
        this.props.bandName
      ),
      React.createElement(
        "h4",
        { className: "bandYear" },
        this.props.year
      ),
      React.createElement(
        "p",
        { className: "bandBio" },
        this.props.bio
      )
    );
  }
});

ReactDOM.render(React.createElement(BandContainer, { data: data }), document.getElementById('band-grid'));
