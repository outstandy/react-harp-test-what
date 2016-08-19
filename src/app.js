/* Test JSON */
// var data = [
//   {id: 1, bandName: "Roz Raskin and the Rice Cakes", year: 2005, bio: "Here's a blurb about the band!"},
//   {id: 2, bandName: "Arc Iris", year: 2006, bio: "Here's a blurb about the band!"},
//   {id: 3, bandName: "Harry and the Potters", year: 2002, bio: "Here's a blurb about the band!"}
// ];

var BandContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="bandContainer">
        <BandGrid data={this.state.data} />
      </div>
    );
  }
});
/* Container for the band cards, need to refactor */
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
/* Band details*/
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
  <BandContainer url="api/bands.json" />,
  document.getElementById('band-grid')
);
