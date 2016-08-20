var BandContainer = React.createClass({
  displayName: 'BandContainer',

  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleBandSubmit: function (band) {
    var bands = this.state.data;
    // Write a smarter ID
    band.id = Date.now();
    var newBands = bands.concat([band]);
    this.setState({ data: newBands });
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: band,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ data: bands });
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'bandContainer' },
      React.createElement(BandGrid, { data: this.state.data }),
      React.createElement(BandCardAdd, { onBandSubmit: this.handleBandSubmit })
    );
  }
});
/* Container for the band cards, need to refactor */
var BandGrid = React.createClass({
  displayName: 'BandGrid',

  render: function () {
    var bandMap = this.props.data.map(function (band) {
      return React.createElement(BandCard, { key: band.id, bandName: band.bandName, year: band.year, bio: band.bio });
    });
    return React.createElement(
      'div',
      { className: 'bandGrid' },
      bandMap
    );
  }
});
/* Band details*/
var BandCard = React.createClass({
  displayName: 'BandCard',

  render: function () {
    return React.createElement(
      'a',
      { href: '#', className: 'bandCard' },
      React.createElement(
        'h3',
        { className: 'bandName' },
        this.props.bandName
      ),
      React.createElement(
        'h4',
        { className: 'bandYear' },
        this.props.year
      ),
      React.createElement(
        'p',
        { className: 'bandBio' },
        this.props.bio
      )
    );
  }
});

var BandCardAdd = React.createClass({
  displayName: 'BandCardAdd',

  getInitialState: function () {
    return { bandName: '', year: '', bio: '' };
  },
  handleBandNameChange: function (e) {
    this.setState({ bandName: e.target.value });
  },
  handleBandYearChange: function (e) {
    this.setState({ year: e.target.value });
  },
  handleBandBioChange: function (e) {
    this.setState({ bio: e.target.value });
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var bandName = this.state.bandName.trim();
    var year = this.state.year.trim();
    var bio = this.state.bio.trim();
    if (!bandName || !year || !bio) {
      return;
    }
    this.props.onBandSubmit({ bandName: bandName, year: year, bio: bio });
    this.setState({ bandName: '', year: '', bio: '' });
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'bandCard addCard' },
      React.createElement(
        'form',
        { className: 'addBandForm', onSubmit: this.handleSubmit },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Band name',
          value: this.state.bandName,
          onChange: this.handleBandNameChange
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Band year',
          value: this.state.year,
          onChange: this.handleBandYearChange
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Band bio',
          value: this.state.bio,
          onChange: this.handleBandBioChange
        }),
        React.createElement('input', { type: 'submit', value: 'Post' })
      )
    );
  }
});

ReactDOM.render(React.createElement(BandContainer, { url: '/api/data', pollInterval: 2000 }), document.getElementById('band-grid'));
