var BandGrid = React.createClass({
  render: function() {
    return (
      <BandCard />
    );
  }
});

var BandCard = React.createClass({
  render: function() {
    return (
      <div className="bandCard">
        <BandDetails />
      </div>
    );
  }
});

/* Band Details*/
var BandDetails = React.createClass({
  render: function() {
    return (
      <div className="band">
        <h3 className="bandName">
          {this.props.name}
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
