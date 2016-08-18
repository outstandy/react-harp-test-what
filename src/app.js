var BandGrid = React.createClass({
  render: function() {
    return (
      <div className="bandGrid">
        <BandCard bandname="Roz Raskin" year="2006">Here's some text about the band!</BandCard>
        <BandCard bandname="Arc Iris" year="2009">Here's some MORE text about the band!</BandCard>
      </div>
    );
  }
});

/* Band Details*/
var BandCard = React.createClass({
  render: function() {
    var md = new Remarkable();
    return (
      <div className="bandCard">
        <h3 className="bandName">
          {this.props.bandname}
        </h3>
        <h4 className="bandYear">
          {this.props.year}
        </h4>
      </div>
    );
  }
});

ReactDOM.render(
  <BandGrid />,
  document.getElementById('band-grid')
);
