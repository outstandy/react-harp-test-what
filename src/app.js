var BandContainer = React.createClass({
  loadCommentsFromServer: function() {
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
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
        <BandCard key={band.id} bandName={band.bandName} year={band.year} bio={band.bio} />
      );
    });
    return (
      <div className="bandGrid">
        {bandMap}
        <BandCardAdd />
      </div>
    );
  }
});
/* Band details*/
var BandCard = React.createClass({
  render: function() {
    return (
      <a href="#" className="bandCard">
        <h3 className="bandName">
          {this.props.bandName}
        </h3>
        <h4 className="bandYear">
          {this.props.year}
        </h4>
        <p className="bandBio">
          {this.props.bio}
        </p>
      </a>
    );
  }
});

var BandCardAdd = React.createClass({
  getInitialState: function() {
    return {bandName: '', year: '', bio: ''};
  },
  handleBandNameChange: function(e) {
    this.setState({bandName: e.target.value});
  },
  handleBandYearChange: function(e) {
    this.setState({year: e.target.value});
  },
  handleBandBioChange: function(e) {
    this.setState({bio: e.target.value});
  },
  render: function(){
    return (
      <div className="bandCard addCard">
        <form className="addBandForm">
          <input
            type="text"
            placeholder="Band name"
            value={this.state.bandName}
            onChange={this.handleBandNameChange}
          />
          <input
            type="text"
            placeholder="Band year"
            value={this.state.year}
            onChange={this.handleBandYearChange}
          />
          <input
            type="text"
            placeholder="Band bio"
            value={this.state.bio}
            onChange={this.handleBandBioChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <BandContainer url="data/bands.json" pollInterval={2000} />,
  document.getElementById('band-grid')
);
