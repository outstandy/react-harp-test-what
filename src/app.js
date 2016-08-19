/* Test JSON */
var data = [
  {id: 1, bandName: "Roz Raskin and the Rice Cakes", year: 2005, bio: "Here's a blurb about the band!"},
  {id: 2, bandName: "Arc Iris", year: 2006, bio: "Here's a blurb about the band!"},
  {id: 3, bandName: "Harry and the Potters", year: 2002, bio: "Here's a blurb about the band!"}
];

var BandContainer = React.createClass({
  render: function() {
    return (
      <div className="bandContainer">
        <BandGrid data={this.props.data} />
      </div>
    );
  }
});

var BandGrid = React.createClass({
  render: function() {
    var bandMap = this.props.data.map(function(band) {
      return (
        <BandCard key={band.id} bandName={band.bandName} year={band.year} bio={band.bio}/>
      );
    });
    return (
      <div className="bandGrid">
        {bandMap}
      </div>
    );
  }
});

/* Band Details*/
var BandCard = React.createClass({
  render: function() {
    return (
      <div className="bandCard">
        <h3 className="bandName">
          {this.props.bandName}
        </h3>
        <h4 className="bandYear">
          {this.props.year}
        </h4>
        <p className="bandBio">
          {this.props.bio}
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <BandContainer data={data} />,
  document.getElementById('band-grid')
);
